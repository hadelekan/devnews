export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'devnews',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  ssr: false,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/filters.js',
    { src: '~/plugins/vue-scroller', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/moment',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      home:'/blog'

    },
    localStorage: true,

    strategies: {
        google: {
          client_id: process.env.GOOGLE_CLIENT_ID
        },
        blankScheme: {
          _scheme: '~/schemes/blankScheme',
          endpoints: {
            login: { url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.GOOGLE_API_KEY}`, method: 'post', propertyName: 'idToken' },
            user: {url: `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.GOOGLE_API_KEY}`, method: 'post', propertyName:'users'}, 
          },
          
        }
    }
  },

  router: {
    middleware: ['auth']
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    
    
  }
}
