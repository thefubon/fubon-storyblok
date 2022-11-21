// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  publicRuntimeConfig: { apiToken: process.env.STORYBLOK_API_KEY },
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_KEY }],
    '@nuxtjs/tailwindcss',
  ],
})
