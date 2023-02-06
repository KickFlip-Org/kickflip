# api
⚙️ API for KickFlip

# KickflipApi - Espace de travail

## Technologies utilisées

### Global

- [nx 15](https://nx.dev/)
- [pnpm 7](https://pnpm.js.org/)
- [Node 18](https://nodejs.org/)
- [TypeScript 4](https://www.typescriptlang.org/)
- [Postgres 15](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Back-end

- [Nest 9](https://nestjs.com/)
- [Mikro-ORM 5](https://mikro-orm.io/)

### Certificats SSL

L'environnement de développement utilise des certificats SSL lors des échanges.  
Pour en générer et que le système les reconnaisse, installer `mkcert` :

#### **Arch/Manjaro**

```bash
sudo pacman -Sy nss mkcert
```

#### **Génération du certificat racine**

```bash
mkcert -install
```

#### **Génération des certificats**

```bash
(cd docker/config/traefik/certs && mkcert kickflip-workspace.dev "*.kickflip-workspace.dev")
```

### Résolution DNS de l'environnement de développement

```bash
sudo nano /etc/hosts

# Ajouter la ligne suivante
127.0.0.1	kickflip-workspace.dev kickflip.kickflip-workspace.dev api-kickflip.kickflip-workspace.dev

# Sauvegarder et quitter
```


## Installation des outils de l'environnement

### Node

#### **Arch/Manjaro**

```bash
sudo pacman -Sy nodejs
```

### PNPM

Le gestionnaire de paquet utilisé dans ce projet est pnpm.  
Pour l'installer, effectuer les commandes suivantes :

#### **Arch/Manjaro**

```bash
sudo pacman -Sy pnpm
```

## Démarrage du développement

### **Installer les dépendances**

```bash
pnpm install
```