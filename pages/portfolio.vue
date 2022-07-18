<template>
    <div>
      <!-- <TheHeader position="sticky bg-black-primary" /> -->
      <div class="bg-white-secondary space-y-60 pb-120">
        <MainComponent 
          page="Portfolio"
          width="max-w-850" 
          title="The <span class='text-yellow-primary font-mak'>projects</span> we prepare decorate our <span class='text-yellow-primary font-mak'>portfolio</span>" 
        />
        <AboutContainer name="Portfolio" />
      </div>
    </div>
</template>

<script>
import MainComponent from '@/components/MainComponent.vue'
import AboutContainer from '~/components/AboutContainer.vue'
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'PortfolioPage',

  components: {
    MainComponent,
    AboutContainer,
    TheHeader
},
}
</script>