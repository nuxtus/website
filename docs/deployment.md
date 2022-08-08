# Deployment

By default Directus is configured to accept CORS from any origin. Nuxtus suggests modifying this for your production deployment.

If you chose to install, remove the Nuxtus hook extension by deleting the folder `server/extensions/hooks/nuxtus-hook` from your project.

You can remove the Nuxtus module from Nuxt as it shouldn't be used in production.