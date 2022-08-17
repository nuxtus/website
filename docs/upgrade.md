# Upgrade

Once deployed you can upgrade to the latest version of Nuxtus by individually updating the associated components.

## Nuxt update

Edit `client/package.json` and change `nuxt` version under `devDependencies` to the latest version then run `npm install`.

## Directus update

Edit `server/package.json` and change `directus` version under `dependencies` to the latest version then run:

```bash
npm install
npm run cli bootstrap
```

> Some updates require configuration changes which will differ depending on the version of Nuxtus you are using. The steps for these changes are listed below. If you are upgrading multiple versions start with the immediate next version and continue through all steps until you are up to date.

## 1.3.0 > 1.3.1

1. [Update Nuxt](#nuxt-update) to `3.0.0-rc.8`
2. [Update Directus](#directus-update) to `9.15.1` (optional)
3. Edit `client/nuxt.config.ts` and add:

```typescript
build: {
	transpile: ['@heroicons/vue']
}
```