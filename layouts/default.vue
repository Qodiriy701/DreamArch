<template>
  <div class="flex flex-col min-h-screen bg-black-primary relative">
    <!-- <div class="w-full h-screen fixed inset-0 top-0 left-0 flex justify-between gap-2 max-w-1366 mx-auto z-40">
      <div class="border-l-2 border-red-primary h-full z-30 inline"></div>
      <div class="border-l-2 border-red-primary h-full z-30 inline"></div>
      <div class="border-l-2 border-red-primary h-full z-30 inline"></div>
      <div class="border-l-2 border-red-primary h-full z-30 hidden md:block"></div>
      <div class="border-l-2 border-red-primary h-full z-30 hidden md:block"></div>
    </div> -->
    <TheHeader />
    <div class="flex-auto">
      <transition>
      <nuxt />
    </transition>
    </div>
    <Map />
    <TheFooter />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'DefaultPage',

  components: {
    Map,
    TheHeader,
    TheFooter,
  },
}
</script>

<style scoped>

</style>