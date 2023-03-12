# KickFLip

[Installation Guide](INSTALL.md)

# Linux & MacOS

## Start services
```bash
make start
```

## Open database
```bash
make db
```

## Browser
You can now test the application from the following links
- [API](https://api-kickflip.kickflip-workspace.dev)
- [WebUI](https://kickflip.kickflip-workspace.dev)

## Test
You can also test the API from the following file [api.http](api.http)

## Stop services
```bash
make stop
```


# Windows

## Start services
```bash
docker compose up -d
```

## Open database
```bash
docker exec -it kickflip-postgres-1 psql -U postgres -d kickflip
```

## Browser
You can now test the application from the following links
- [API](https://api-kickflip.kickflip-workspace.dev)
- [WebUI](https://kickflip.kickflip-workspace.dev)

## Test
You can also test the API from the following file [api.http](api.http)

## Stop services
```bash
docker compose down
```
