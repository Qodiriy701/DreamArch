<template>
  <div class="text-white-primary py-10 md:p-15 bg-black-primary">
    <div class="container md:flex items-center justify-between space-y-60 md:space-y-0">
      <nuxt-link to="/" @click.native="scrollToTop">
        <img class="cursor-pointer" width="152" height="77" src="@/assets/icons/brand2.png" alt="DreamArch" />
      </nuxt-link>
      <div class="flex flex-wrap items-center gap-15 md:justify-center">
        <a target="_blank" class="w-54 h-54 border-2 border-gray-secondary flex items-center justify-center" :href="link.url" v-for="link in list" :key="link.id" rel="nofollow">
          <img class="w-24 h-24 object-cover object-center" :src="`https://mediasaboq.uz/${link.icon}`" :alt="link.url" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TheFooter',

  data() {
    return {
      list: [],
      copyRight: ''
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    async getSocials() {
    const res = await axios.get(`https://mediasaboq.uz/api/v1/socials`)
    const copy = await axios.get(`https://mediasaboq.uz/api/v1/footer`)
    this.list = res.data
    this.copyRight = copy.data
  }
  },

  mounted() {
    this.getSocials()
  },
}
</script>
