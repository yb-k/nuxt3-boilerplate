// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  // ssr: false,
  css: ['@/assets/sass/app.scss'],
  postcss: {},
  typescript: {
    typeCheck: true,
  },
  dir: {
    public: '../public',
  },
  app: {
    head: {
      charset: 'utf-8',
      meta: [
        { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [{ rel: 'icon', href: 'favicon.ico' }],
    },
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  components: [
    {
      extensions: ['vue'],
      path: '~/components/common/',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  nitro: {
    routeRules: {
      ...(process.env.PROXY_URL && {
        [`${process.env.NUXT_PUBLIC_API_BASE || '/'}**`]: {
          proxy: `${process.env.PROXY_URL}${
            process.env.NUXT_PUBLIC_API_BASE || '/'
          }**`,
        },
      }),
    },
  },
});
