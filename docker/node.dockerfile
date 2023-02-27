##########################################################################################
FROM node:18-alpine3.16 as base
##########################################################################################

RUN npm -g i pnpm@7.13.2

RUN apk add --no-cache git python3 make gcc g++ postgresql-dev

WORKDIR /app

##########################################################################################
FROM base as dependencies
##########################################################################################

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --unsafe-perm --frozen-lockfile && \
  rm -rf ~/.pnpm-store

##########################################################################################
FROM dependencies as sources
##########################################################################################

COPY nx.json tsconfig.base.json ./
COPY libs/ ./libs/
COPY apps/ ./apps/

##########################################################################################
FROM sources as build
##########################################################################################

ARG PROJECT

RUN pnpm exec nx build $PROJECT

##########################################################################################
FROM build as production-dependencies
##########################################################################################

ARG PROJECT

WORKDIR /app
COPY --chown=node --from=build /app/dist/apps/$PROJECT .

RUN pnpm install --unsafe-perm && \
  rm -rf ~/.pnpm-store

##########################################################################################
FROM node:18-alpine3.16 as application
##########################################################################################

ARG PROJECT

RUN apk add --no-cache tini

WORKDIR /app
RUN chown -R node:node ./
COPY --chown=node --from=build /app/dist/apps/$PROJECT .
COPY --chown=node --from=production-dependencies /app/node_modules ./node_modules

USER node

ENTRYPOINT ["/sbin/tini", "--"]
CMD node main.js