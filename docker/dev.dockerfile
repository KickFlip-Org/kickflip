FROM node:18-bullseye-slim

RUN apt-get update && apt-get install -y git tini procps

RUN npm -g i pnpm@7.13.2

ENTRYPOINT ["/usr/bin/tini", "--"]