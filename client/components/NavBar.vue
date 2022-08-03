<template>
  <div class="grid gap-4 grid-cols-5 bg-white block-padding max-w-xl float-right text-gray-500 shadow-sm">
	<img src="/imgs/logo.svg" alt="nuxtus logo" class="h-12 w-12">
	<div class="nav">Home</div>
	<div class="nav"><nuxt-link to="#features">Features</nuxt-link></div>
	<div class="nav">Docs</div>
	<div class="nav">GITHUB</div>
  </div>
</template>

<style scoped>
.nav {
	@apply mt-2 text-lg cursor-pointer text-center;
}

.nav:hover {
	@apply text-purple-700;
}
</style>