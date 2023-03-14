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

## API
### Documentation
You can test the API from [api.http](api.http)
### Test
You have also the documentation of the routes on [/docs](https://api-kickflip.kickflip-workspace.dev/docs)

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

## API
### Documentation
You can test the API from [api.http](api.http)
### Test
You have also the documentation of the routes on [/docs](https://api-kickflip.kickflip-workspace.dev/docs)

## Stop services
```bash
docker compose down
```
