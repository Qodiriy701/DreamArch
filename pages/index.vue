<template>
  <div class="relative">
    <div class="main max-w-1520 mx-auto flex items-center justify-center text-white-primary">
      <div class="container py-60 relative lg:flex items-end">
        <div class="flex flex-col flex-auto items-center justify-center md:py-40 relative">
          <h1 class="font-bold font-mak inline-block uppercase text-Title md:text-mdTitle lg:text-lgTitle max-w-900 text-center leading-38 md:leading-60 mb-15">Modern architectural solutions</h1>
          <p class="text-lg leading-30 font-light max-w-600 text-center mb-30 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim nunc auctor diam porttitor malesuada tortor ipsum, </p>
          <nuxt-link to="/about" class="z-10">
            <button class="btn px-30 py-15 mb-60 md:m-20 inline-block text-sm font-medium uppercase transition-all text-black-primary border border-yellow-secondary bg-yellow-primary hover:text-yellow-primary hover:bg-transparent cursor-pointer p-40">About us</button>
          </nuxt-link>
          <div class="shrink-0 flex w-full justify-end lg:absolute bottom-0 right-0">
            <ScrollLoop />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black-secondary space-y-120 md:space-y-180 lg:space-y-240 py-120">
      <div class="relative max-w-1520 w-full mx-auto">
        <p class="absoluteText absolute top-70 left-0 break-all uppercase text-BgTitle md:text-mdBgTitle lg:text-lgBgTitle font-mak font-bold text-gray-secondary">SeRvices</p>
        <div class="container text-white-primary space-y-60">
           <h2 class="font-medium text-Title md:text-mdTitle lg:text-lgTitle uppercase z-10"><span class="text-yellow-primary">Services</span> offered by our team are provided by their <span class="text-yellow-primary">masters</span></h2>
           <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-30">
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
           </div>
        </div>
      </div>
      <div class="relative max-w-1520 w-full mx-auto divBox1">
        <p class="absoluteText absolute top-70 left-0 break-all uppercase text-BgTitle md:text-mdBgTitle lg:text-lgBgTitle font-mak font-bold text-gray-secondary">Statistics</p>
        <div class="container text-white-primary space-y-60 z-10">
           <h2 class="font-medium text-Title md:text-mdTitle lg:text-lgTitle uppercase z-10">these short <span class="text-yellow-primary">statistics</span> will replace many commendations</h2>
           <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-30">
              <StatisticCard color="bg-gray-secondary text-white-primary" bgColor="statistics__item" />
              <StatisticCard color="bg-gray-secondary text-white-primary" bgColor="statistics__item" />
              <StatisticCard color="bg-gray-secondary text-white-primary" bgColor="statistics__item" />
           </div>
        </div>
      </div>
      <div class="relative max-w-1520 w-full mx-auto divBox2">
        <p class="absoluteText top__70 absolute left-0 break-all uppercase text-BgTitle md:text-mdBgTitle lg:text-lgBgTitle font-mak font-bold text-gray-secondary">About us</p>
        <div class="container">
          <div class="grid md:grid-cols-2 bg-black-primary border-2 border-gray-secondary z-10">
            <div class="max-h-335 md:max-h-513 w-full overflow-hidden relative">
              <div class="absolute top-0 bottom-0 left-0 w-full -rotate-90 overflow-hidden">
                <p class="font-medium p-10 break-normal bg-yellow-primary h-40 overflow-hidden">ABOUT US  ·  OUR TEAM  ·  ABOUT US  ·  OUR TEAM  ·  ABOUT US  ·  OUR TEAM</p>
              </div>
              <img src="../assets/img/dreamArch.png" class="w-full h-full object-cover object-center" alt="">
            </div>
            <div class="p-30 md:py-40 flex flex-col gap-30 text-white-primary">
              <div class="flex-auto">
                <h3 class="font-bold text-xxl mb-15 md:mb-30">Brief about our team</h3>
                <p class="">Volutpat cras consectetur tellus congue tellus sapien, facilisis tortor. Nulla tristique pellentesque nisi nisi, elementum rhoncus. Accumsan cursus eu egestas fermentum augue. Pharetra sem tempor rutrum viverra amet ullamcorper fringilla aliquet. Ipsum velit sit nunc, habitant turpis scelerisque nulla aliquam eu deliranbum.</p>
              </div>
            <div>
              <button class="btn px-30 py-15 text-sm font-medium text-yellow-secondary border border-yellow-secondary inline-block">Read more</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="relative max-w-1520 w-full mx-auto divBox3">
        <p class="absoluteText absolute top-70 left-0 break-all uppercase text-BgTitle md:text-mdBgTitle lg:text-lgBgTitle font-mak font-bold text-gray-secondary">PORTFOLIO</p>
        <div class="container text-white-primary space-y-60 z-10">
          <h2 class="font-medium text-Title md:text-mdTitle lg:text-lgTitle uppercase z-10">Collection of top <span class="text-yellow-primary">projects</span> implemented by <span class="text-yellow-primary">our team</span></h2>
          <SwiperNext />
        </div>
      </div>
      <div class="relative max-w-1520 w-full mx-auto divBox4">
        <p class="absoluteText absolute top-70 left-0 break-all uppercase text-BgTitle md:text-mdBgTitle lg:text-lgBgTitle font-mak font-bold text-gray-secondary">BLOG</p>
        <div class="container text-white-primary space-y-30 z-10">
           <h2 class="font-medium text-Title md:text-mdTitle lg:text-lgTitle uppercase z-10 mb-30 ">List of best <span class="text-yellow-primary">articles</span> published by <span class="text-yellow-primary">our team</span></h2>
           <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-30">
              <ArticleCard color="bg-black-primary" />
              <ArticleCard color="bg-black-primary" />
              <ArticleCard color="bg-black-primary" />
           </div>
            <button class="btn px-30 py-15 inline-block text-sm font-medium text-yellow-secondary border border-yellow-secondary hover:bg-yellow-primary hover:text-black-primary">All our articles</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'
import ServicesCard from '@/components/ServicesCard.vue'
import StatisticCard from '@/components/StatisticCard.vue'
import TheHeader from '~/components/TheHeader.vue'
import ScrollLoop from '~/components/ScrollLoop.vue'
import SwiperNext from '~/components/SwiperNext.vue'
export default {
  name: 'IndexPage',

  components: {
    ArticleCard,
    ServicesCard,
    StatisticCard,
    TheHeader,
    ScrollLoop,
    SwiperNext
},
}
</script>


<style scoped>
.main {
  filter: invert(6%);
  height: calc(100vh - 106.91px);
  background: url('../assets/img/MainBg.jpg') no-repeat bottom center;
  background-size: cover;
}
.top__70 {
  top: -100px;
}

@media screen and (max-width: 768px) {
  .main {
    height: calc(100vh - 96.91px);
    background: url('../assets/img/MainBg.jpg') no-repeat bottom center;
    background-size: cover;
  }
}
</style>
