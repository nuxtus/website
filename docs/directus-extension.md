# Directus extension

A Directus webhook extension that handles the automatic creation of Nuxt pages and types when a new collection is created in Directus.

Calls the Nuxtus /api/directus/collection endpoint when a new collection is created.
Calls the Nuxtus /api/directus/field endpoint when fields are created, updated or deleted.

> The Nuxt module is installed automatically if you are using the Nuxtus boilerplate. If you need to install manually continue reading below.

## Installation

Currently Directus requires that you manually install extensions.

Clone the repository:

```bash
git clone git@github.com:nuxtus/hook.git nuxtus-hook
cd nuxtus-hook
npm run build
```

Place `/dist/index.js` in Directus project `/extensions/hooks/nuxtus-hook/`

If you haven't already, install the [Nuxtus Nuxt Module](nuxt-module.md) to configure the Nuxt endpoints that will be called by this extension.