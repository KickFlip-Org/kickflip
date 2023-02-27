# KickFlip

### Dependencies

Global
- [nx 15](https://nx.dev/)
- [pnpm 7](https://pnpm.js.org/)
- [Node 18](https://nodejs.org/)
- [TypeScript 4](https://www.typescriptlang.org/)
- [Postgres 15](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

Back-end
- [Nest 9](https://nestjs.com/)
- [Mikro-ORM 5](https://mikro-orm.io/)

## Linux & MacOS

### Dependencies *- ArchLinux / Manjaro*

The development environment uses SSL certificates during exchanges.  
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

### Install environment
#### Initialize environment
```bash
make init
```

#### Start services
```bash
make start
```

#### Stop services
```bash
make stop
```

## Windows

### **Generate root certificate**

```bash
mkcert -install
```

### **Generate certificates**
Create folder `docker/config/traefik/certs`, access it and execute this command :
```bash
mkcert kickflip-workspace.dev "*.kickflip-workspace.dev"
```

### DNS resolution
Add the following line in `/etc/hosts`
```bash
127.0.0.1	kickflip-workspace.dev kickflip.kickflip-workspace.dev api-kickflip.kickflip-workspace.dev
```

### **Install NodeJS dependencies**

```bash
pnpm install
```

### **Initialize the database**

```bash
docker compose up -d postgres
docker compose exec postgres psql -U postgres -c "create database kickflip"
docker compose run --rm kickflip-api pnpm exec nx run kickflip-api:migrate
```

### **Initialize the database**

```bash
docker compose up -d
```

### **Browser**
If the installation was successful, you can access to
- [API](https://api-kickflip.kickflip-workspace.dev)
- [WebUI](https://kickflip.kickflip-workspace.dev)
