# Overview

Nuxtus is an open-source boilerplate and suite of utilities to make working with [Directus](https://directus.io) and [Nuxt](https://nuxtjs.org) easy.

The end result can be a static website or dynamically pull data from Directus depending on your preference.

## Features

- [Directus](https://directus.io)
- [Nuxt](https://nuxtjs.org)
  - [Tailwind CSS](https://tailwindcss.nuxtjs.org/)
  - [Headless UI](https://headlessui.dev/)
  - [HeroIcons](https://heroicons.com/)
  - [Google Fonts](https://github.com/nuxt-community/google-fonts-module)
  - [Nuxtus CLI](https://github.com/nuxtus/cli)
  - Typescript types

## Installation

If starting a new project it is recommended you use the Nuxtus boilerplate as this will set up everything for you. Existing projects can add Nuxtus to their project by following the [instructions below](#existing-project).

### New project

```bash
npx create-nuxtus app-name
```
Replace app-name with the name of your project.

> Nuxtus requires Node 16 (the minimum requirement for Directus).

Nuxtus will automatically migrate the Directus DB if you are using SQLite. Otherwise follow the directions below to manually configure your database and get started.

Your project will contain 2 folders server (Directus) and client (Nuxt).

### Directus

By default Nuxtus uses an SQLite database. If you wish to use an alternative database simply edit the `server/.env` file as suggested in the [Directus documentation](https://docs.directus.io/configuration/config-options/#database) then follow the steps below.

```bash
$ cd server

# From within the root of the project
$ npm run cli bootstrap
```

> If using Nuxt is not using `http://localhost:3000` update NUXT_SERVER in the `server/.env` file.

### Nuxt

No set up for Nuxt is required.

> If Directus is not using `http://localhost:8055` update DIRECTUS_SERVER in the `client/.env` file.


### Existing project

1. [Install Directus Extention](directus-extension.md)
2. [Install Nuxt Module](nuxt-module.md)

## Acknowledgements

Nuxtus wouldn't be possible without the following amazing technologies:

* [Directus](https://directus.io)
* [Nuxt](https://nuxt.js.org)
* [Typescript](https://tailwindcss.com)
* [Nuxt-Directus](https://nuxt-directus.netlify.app/)
* [OpenApi Typescript](https://www.npmjs.com/package/openapi-typescript)
