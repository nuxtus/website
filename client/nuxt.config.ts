import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	buildModules: [
		[
			"@nuxtjs/google-fonts",
			{
				/* module options */
			},
		],
		"@nuxtjs/tailwindcss"
	],
	modules: ["nuxt-directus", "@nuxtus/nuxt-module"],
	googleFonts: {
		families: {
			Inter: true,
		},
	},
	tailwindcss: {
		// Options
		jit: true
	},
	css: [
		'aos/dist/aos.css',
		'~/assets/fonts/style.css'
	],
	// directus: {

	// },
	nuxtus: {
		authDirectus: true,
	},
	// publicRuntimeConfig: {
	// 	directusEmail: "",
	// 	directusPassword: "",
	// },
	runtimeConfig: {
		public: {
			directusEmail: "",
			directusPassword: "",
		},
		directus: {
			url: "",
		},
	},
})
