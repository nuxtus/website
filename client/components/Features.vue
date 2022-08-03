<template>
  <div class="overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <svg class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
      </svg>

      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Packed with features.</h2>
        </div>
        <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
          <div v-for="feature in features" :key="feature.name">
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-feature-green text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              <div v-html="feature.description"></div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowsExpandIcon, DocumentTextIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/vue/outline'
import { FireIcon } from '@heroicons/vue/solid';

const features = [
  {
    name: 'Flexible',
    description: 'Use as a pre-configured boilerplate starter or add only the bits you need to your existing project.',
    icon: ArrowsExpandIcon,
  },
  {
    name: 'Easy to get started',
    description:
      'Simply <span class="bg-gray-100 p-1 text-black">npx create-nuxtus app-name</span> to get a fully operational Nuxtus project with Directus server and Nuxt client (with Tailwind CSS).',
    icon: FireIcon,
  },
  {
    name: 'Automatic pages from collections',
    description:
      'Create a Collection in Directus and a page is automatically created in your Nuxt frontend.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Fully typed',
    description:
      'All collection objects are fully typed automatically. And always up to date as you add new fields in Directus.',
    icon: DocumentTextIcon,
  },
]
</script>