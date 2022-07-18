export default {
  head: {
    title: 'DreamArch',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      // {
      //   name: 'google-site-verification',
      //   content: 'yHd2FeAWrjudp-3y-c-TU13AKyo8AXALT3QRxLa9Nf4',
      // },
      // {
      //   name: 'yandex-verification',
      //   content: 'd548d1b7ec3ef544',
      // },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow',
      },
      {
        hid: 'googlebot',
        name: 'googlebot',
        content: 'index, follow',
      },
      {
        hid: 'yandex',
        name: 'yandex',
        content: 'index, follow',
      },
      // {
      //   hid: 'description',
      //   name: 'description',
      //   content:
      //     "MediaSaboq.uz - Badiiy, ilmiy maqolalar va  ma'lumotlarni o'z ichiga olgan web-sahifa bo'lib, yurtimizda kitobxonlar qatlamini yaratish, yoshlarning  ilm-fanga bo'lgan rag'batini oshirish, rivojlantirishni maqsad qilgan ijtimoiy loyiha.",
      // },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Dream Arch, Dreamarch, Qurulish, Arxitektura, Zamonaviy-uylar',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        hid: 'og_title',
        property: 'og:title',
        content: 'DreamArch',
      },
      {
        property: 'og:site_name',
        content: 'DreamArch',
      },
      // {
      //   hid: 'og_description',
      //   property: 'og:description',
      //   content:
      //     "MediaSaboq.uz - Badiiy, ilmiy maqolalar va  ma'lumotlarni o'z ichiga olgan web-sahifa bo'lib, yurtimizda kitobxonlar qatlamini yaratish, yoshlarning  ilm-fanga bo'lgan rag'batini oshirish, rivojlantirishni maqsad qilgan ijtimoiy loyiha.",
      // },
      {
        hid: 'og_type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og_url',
        property: 'og:url',
        content: 'https://dreamarch.uz',
      },
      // {
      //   hid: 'og_image',
      //   property: 'og:image',
      //   content: 'https://mediasaboq.uz/images/logo/2022-06-24-19-09-00-134.png',
      // },
      {
        hid: 'og_image_width',
        property: 'og:image:width',
        content: '200',
      },
      {
        hid: 'og_image_height',
        property: 'og:image:height',
        content: '200',
      },
      // {
      //   name: 'twitter:image',
      //   content: 'https://mediasaboq.uz/images/logo/2022-06-24-19-09-00-134.png',
      // },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper@8/swiper-bundle.min.css',
      },
    ],

    script: [
      {
        src: 'https://unpkg.com/swiper@8/swiper-bundle.min.js',
      },
    ],
  },

  css: ['@/assets/css/main.css'],

  plugins: [], // { src: '@/plugins/main.js', mode: 'client' }
  // plugins: [{ src: '@/plugins/main.js', mode: 'client' }],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
