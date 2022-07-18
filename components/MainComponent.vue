<template>
  <div class="bg-black-primary">
    <div class="container">
        <div class="flex flex-col md:flex-row items-center md:justify-between gap-y-60 gap-x-20 py-60 md:py-80">
          <div class="">
            <h1 class="text-Title md:text-mdTitle lg:text-lgTitle uppercase font-mak font-semibold text-white-primary" :class="width" v-html="title"></h1>
            <div class="flex items-center text-base gap-5 text-white-primary">
              <nuxt-link to="/" >Main page / </nuxt-link>
              <p class="font-semibold ">{{ page }}</p>
            </div>
          </div>
          <div class="flex justify-end ml-auto">
            <ScrollLoop />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import ScrollLoop from './ScrollLoop.vue'
export default {
  name: 'MainComponent',

  props: {
    title: {
      required: true,
      type: String,
    },
    width: {
      required: true,
      type: String,
    },
    page: {
      required: true,
      type: String,
    }
  },

  components: {
    ScrollLoop,
  },

}
</script>