# Installation

## Linux & MacOS

1. Install dependencies *- ArchLinux / Manjaro*
   > The development environment uses SSL certificates during exchanges.

   To generate them and have the system recognize them, install `mkcert` :
    ```bash
    sudo pacman -Sy nss mkcert
    ```

   The development environment uses `NodeJS`. To install it, do the following commands :
    ```bash
    sudo pacman -Sy nodejs
    ```

   The package manager used in this project is `pnpm`. To install it, do the following commands :
    ```bash
    sudo pacman -Sy pnpm
    ```

2. Initialize environment
    ```bash
    make init
    ```

> To launch the application you must follow the instructions [here](README.md)


## Windows

### Dependencies
1. Install dependencies
   > The dependencies are listed [here](README.md)

2. Generate root certificate
    ```bash
    mkcert -install
    ```

3. Create folder `docker/config/traefik/certs`, access it and execute this command :
    ```bash
    mkcert kickflip-workspace.dev "*.kickflip-workspace.dev"
    ```

4. Add the following line in `/etc/hosts`
    ```bash
    127.0.0.1	kickflip-workspace.dev kickflip.kickflip-workspace.dev api-kickflip.kickflip-workspace.dev
    ```

5. Install NodeJS dependencies
    ```bash
    pnpm install
    ```

6. Initialize the database
    ```bash
    docker compose up -d postgres
    docker compose exec postgres psql -U postgres -c "create database kickflip"
    docker compose run --rm kickflip-api pnpm exec nx run kickflip-api:migrate
    ```

> To launch the application you must follow the instructions [here](README.md)
 
