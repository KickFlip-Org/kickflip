SHELL := /bin/bash

GREEN := \033[32m
RESET := \033[39m
ARROW := \033[1m\033[31m>$(GREEN)>\033[33m>$(RESET)

node_modules:
	@ echo -e "${ARROW} Install node dependencies..."
	@ pnpm install

docker/config/traefik/certs:
	@ echo -e "${ARROW} Create certs folder..."
	@ mkdir docker/config/traefik/certs

init: node_modules docker/config/traefik/certs
	@ echo -e "${ARROW} Generate root certificate..."
	@ mkcert -install

	@ echo -e "${ARROW} Generate certificates..."
	@ cd docker/config/traefik/certs && mkcert kickflip-workspace.dev "*.kickflip-workspace.dev"

	@ echo -e "${ARROW} Editing hosts file..."
	@ sudo sed -i '$ a 127.0.0.1	kickflip-workspace.dev kickflip.kickflip-workspace.dev api-kickflip.kickflip-workspace.dev' /etc/hosts

	@ echo -e "${ARROW} Initialize database..."
	@ docker compose up -d postgres
	@ docker compose exec postgres psql -U postgres -c "DROP DATABASE IF EXISTS dbname"
	@ docker compose exec postgres psql -U postgres -c "CREATE DATABASE dbname"
	@ docker compose run --rm kickflip-api pnpm exec nx run kickflip-api:migrate

	@ echo -e "${ARROW} Starting services..."
	@ docker compose up -d

	@ echo -e "[${GREEN}OK${RESET}] Initialized"


start: node_modules
	@ echo -e "${ARROW} Starting services..."
	@ docker compose up -d
	@ echo -e 'webui : https://kickflip.kickflip-workspace.dev'
	@ echo -e 'api : https://api-kickflip.kickflip-workspace.dev'
	@ echo -e "[${GREEN}OK${RESET}] Started"

stop:
	@ docker compose down
	@ echo -e "[${GREEN}OK${RESET}] Stopped"


.PHONY: init, start, stop
