<template>
    <div class="bg-white-secondary relative space-y-60 pb-120">
      <MainComponent
        page="About us"
        width="max-w-500" 
        title="<span class='text-yellow-primary font-mak'>Full</span> nformation about <span class='text-yellow-primary font-mak'>our team</span>" 
      />
      <div class="container relative">
        <div class="bg-white-primary p-30 md:p-48 lg:p-60 flex flex-col gap-60 relative">
          <p class="absoluteText absolute top-100 left-0 break-all uppercase text-BgTitle md:text-mdBgTitle lg:text-lgBgTitle font-mak font-bold text-gray-primary">Architecture</p>
          <h2 class="font-medium text-Title md:text-mdTitle lg:text-lgTitle uppercase z-10">a brief illustrated title on Architecture</h2>
          <div class="flex flex-col md:flex-row gap-15 z-10">
            <div class="w-54 h-54 shrink-0 rounded-full border border-white-secondary flex items-center justify-center">
              <img src="../assets/icons/i.png" width="24" height="24" class="object-cover object-center" alt="about">
            </div>
            <p class="text-base leading-24">Architecture is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-30">
            <StatisticCard color="bg-gray-primary text-black-primary" bgColor="statistics__item2" />
            <StatisticCard color="bg-gray-primary text-black-primary" bgColor="statistics__item2" />
            <StatisticCard color="bg-gray-primary text-black-primary" bgColor="statistics__item2" />
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15 py-60">
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
          </div>
          <!-- <div class="">
            <div class="swiper mySwiper pb-30 mb-60">
              <div class="swiper-wrapper pr-2">
                <div class="swiper-slide"><AuthorDesCard /></div>
                <div class="swiper-slide"><AuthorDesCard /></div>
                <div class="swiper-slide"><AuthorDesCard /></div>
                <div class="swiper-slide"><AuthorDesCard /></div>
                <div class="swiper-slide"><AuthorDesCard /></div>
              </div>
              <div class="swiper-scrollbar"></div>
            </div>
          </div> -->
          <div class="carousel-wrapper">
            <div class="flex gap-15 pr-2">
              <AuthorDesCard />
              <AuthorDesCard />
              <AuthorDesCard />
              <AuthorDesCard />
              <AuthorDesCard />
              <AuthorDesCard />
            </div>
          </div>
          <!-- <QuestionAccordion /> -->

          <AboutAccordion />
          <!-- <div class="flex flex-col gap-30">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-15">
              <ArticleCard color="bg-white-primary" />
              <ArticleCard color="bg-white-primary" />
              <ArticleCard color="bg-white-primary" />
            </div>
            <div class="flex justify-start">
              <button class="btn px-30 py-15 inline-block text-sm font-medium text-yellow-secondary border border-yellow-secondary hover:bg-yellow-primary hover:text-black-primary">Other articles</button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
</template>

<script>
import AuthorCard from '@/components/AuthorCard.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import MainComponent from '@/components/MainComponent.vue'
import AuthorDesCard from '@/components/AuthorDescCard.vue'
import StatisticCard from '@/components/StatisticCard.vue'
import QuestionAccordion from '~/components/QuestionAccordion.vue'
import TheHeader from '@/components/TheHeader.vue'
import AboutAccordion from '@/components/AboutAccordion.vue'
import '../plugins/main.js'
export default {
  name: 'AboutPage',

  components: {
    AuthorCard,
    ArticleCard,
    AuthorDesCard,
    MainComponent,
    StatisticCard,
    QuestionAccordion,
    TheHeader,
    AboutAccordion,
  },

  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper@8/swiper-bundle.min.css',
      },
    ],

    script: [{ src: 'https://unpkg.com/swiper@8/swiper-bundle.min.js' }],
  },
}
</script>



<style scoped>
.carousel-wrapper {
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  overflow-x: scroll;
}

.carousel-wrapper::-webkit-scrollbar {
  height: 4px;
  background: #F4F4F4;
}

.carousel-wrapper::-webkit-scrollbar-thumb {
  height: 4px;
  width: 100px !important;
  background: #BA8600;
}

/* swiper */

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>