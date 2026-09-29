# Kaleidoscope Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

Requires Node.js 20 or newer (see `.nvmrc`; run `nvm use`).

```bash
npm install
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The site is hosted on GitHub Pages at https://terraframe.github.io/kaleidoscope-documentation/.

Every push to `main` builds and publishes the site with the [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow. You can also run it by hand from the repo's **Actions** tab.

To set this up the first time, go to the repo's **Settings > Pages** and set **Source** to **GitHub Actions**.

To serve the site from a custom domain instead, set `url` to the domain and `baseUrl` to `/` in `docusaurus.config.ts`, and add the domain under **Settings > Pages**.
