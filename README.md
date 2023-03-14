# 🛹 KickFlip

### Dependencies

#### Global
- [nx 15](https://nx.dev/)
- [pnpm 7](https://pnpm.js.org/)
- [Node 18](https://nodejs.org/)
- [TypeScript 4](https://www.typescriptlang.org/)
- [Postgres 15](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

#### Back-end
- [Nest 9](https://nestjs.com/)
- [Mikro-ORM 5](https://mikro-orm.io/)


### Links
- You must follow the [Installation Guide](INSTALL.md)
- You must have the [API](https://api-kickflip.kickflip-workspace.dev) and the [WebUI](https://kickflip.kickflip-workspace.dev)
- You can test the API from [api.http](api.http)
- You have documentation of API routes on [/docs](https://api-kickflip.kickflip-workspace.dev/docs)



## Linux & MacOS

Start services
```bash
make start
```

Open database
```bash
make db
```

Stop services
```bash
make stop
```



## Windows

Start services
```bash
docker compose up -d
```

Open database
```bash
docker exec -it kickflip-postgres-1 psql -U postgres -d kickflip
```

Stop services
```bash
docker compose down
```
