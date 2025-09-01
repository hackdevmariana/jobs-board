// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/content',
    '@vite-pwa/nuxt',
    '@nuxt/scripts',
  ],
  
  // Configuración de CSS
  css: [
    '@mdi/font/css/materialdesignicons.css',
    'vuetify/lib/styles/main.sass'
  ],
  
  // Configuración de Vuetify
  build: {
    transpile: ['vuetify']
  },
  
  // Configuración de PWA
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: process.env.NODE_ENV === 'development',
    }
  },
  
  // Configuración de autenticación
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    }
  },
  
  // Configuración de Content
  content: {
    highlight: {
      theme: 'github-light',
      preload: ['ts','js','css','java','json','bash','vue']
    }
  },
  
  // Configuración de runtime
  runtimeConfig: {
    // Variables privadas (solo disponibles en el servidor)
    authSecret: process.env.AUTH_SECRET,
    // Variables públicas (disponibles en cliente y servidor)
    public: {
      authOrigin: process.env.AUTH_ORIGIN || 'http://localhost:3000'
    }
  }
})