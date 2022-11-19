// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	buildModules: [
		'@nuxtjs/google-fonts'
	],
	build: {
		transpile: ['@heroicons/vue']
	},
	modules: ["@nuxtjs/tailwindcss", "nuxt-directus", "@nuxtus/nuxt-module"],
	tailwindcss: {
		// Options
		// jit: true
	},
	css: [
		'aos/dist/aos.css',
		'~/assets/fonts/style.css'
	],
	directus: {},
	nuxtus: {
		authDirectus: true,
	},
	runtimeConfig: {
		nuxtus: {
			directus: {
			email: '',
			password: ''
			}
		}
	}
})
