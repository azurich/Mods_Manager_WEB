# Mods Manager - Landing Page

Landing page officielle du projet Mods Manager, un gestionnaire de mods Minecraft.

## Description

Site web vitrine pour Mods Manager, une application permettant de gérer facilement ses mods Minecraft avec support pour CurseForge et Modrinth.

## Technologies

- Next.js 16.2.4 (Turbopack)
- React 19.2
- TypeScript
- Tailwind CSS 3.4
- Shadcn UI

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build

```bash
npm run build
```

## Qualité

La CI GitHub exécute `npm ci`, `npm run lint`, `npm run build` et `npm audit --audit-level=moderate` sur chaque pull request vers `main` et chaque push sur `main`.

La page récupère la dernière release de l'application via `/api/latest-release` et affiche le checksum SHA256 de l'installeur quand GitHub le fournit.

## Déploiement

Le projet est configuré pour être déployé sur Vercel.

## Auteur

Azurich

## Licence

Open Source
