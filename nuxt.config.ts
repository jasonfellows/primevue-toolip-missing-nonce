// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["primevue"],
  },

  css: ["primevue/resources/themes/lara-light-green/theme.css"],

  devtools: { enabled: false },

  modules: ["nuxt-security"],

  security: {
    nonce: true,
    headers: {
      crossOriginEmbedderPolicy: "unsafe-none",
      crossOriginOpenerPolicy: "same-origin-allow-popups",
      crossOriginResourcePolicy: "cross-origin",
      contentSecurityPolicy: {
        "default-src": ["'self'", "https://primevue-toolip-missing-nonce.vercel.app/"],
        "script-src": [
          "'nonce-{{nonce}}'",
        ],
        "style-src": ["'nonce-{{nonce}}'"],
        "img-src": [],
        "frame-src": [],
        "connect-src": [],
        "worker-src": ["'self'", "blob:"],
      },
    },
  },
})

