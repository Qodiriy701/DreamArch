<template>
    <div class="bg-black-primary">
      <!-- <TheHeader position="sticky bg-black-primary" /> -->
      <div class="bg-white-secondary space-y-60 pb-120">
        <MainComponent 
          width="max-w-762" 
          page="Our servises"
          title="our <span class='text-yellow-primary font-mak'>services</span> are very similar to your <span class='text-yellow-primary font-mak'>wishes</span>" 
        />
        <AboutContainer name="Architec ture" />
        <AboutContainer name="Interior" />
        <AboutContainer name="Exterior" />
      </div>
    </div>
</template>

<script>
import MainComponent from '@/components/MainComponent.vue'
import AboutContainer from '~/components/AboutContainer.vue'
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'ServicesPage',

  components: {
    MainComponent,
    AboutContainer,
    TheHeader
},
}
</script>