// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'https://test-task-api.tapir.ws/',
    },
  },

  modules: ['@pinia/nuxt', '@nuxt/image'],

  css: ['~/assets/css/main.css']
})