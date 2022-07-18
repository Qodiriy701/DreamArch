<template>
  <div class="container relative">
    <div class="bg-white-primary p-30 md:p-48 lg:p-60 pb-30 flex flex-col gap-60 relative">
        <p class="absoluteText absolute top-90 leading-60 md:leading-180 left-0 break-all uppercase text-BgTitle md:text-mdBgTitle lg:text-lgBgTitle font-mak font-bold text-gray-primary">{{ name }}</p>
        <h2 class="font-medium text-Title md:text-mdTitle lg:text-lgTitle uppercase leading-39 md:leading-62 z-10">a brief illustrated title on Architecture</h2>
        <div class="flex flex-col md:flex-row gap-15 z-10">
            <div class="w-54 h-54 shrink-0 rounded-full border border-white-secondary flex items-center justify-center">
                <img src="../assets/icons/i.png" width="24" height="24" class="object-cover object-center" alt="about">
            </div>
            <p class="text-base leading-24">Architecture is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-15">
            <AdvantageCard />
            <AdvantageCard />
            <AdvantageCard />
        </div>
        <div class="styleGrid grid lg:lg:grid-cols-3 gap-15">
            <ExampleCard index="1" />
            <ExampleCard index="2" />
            <ExampleCard index="2" />
            <ExampleCard index="2" />
            <ExampleCard index="2" />
            <ExampleCard index="2" />
        </div>
        <div class="flex flex-wrap items-center justify-center gap-36">
            <p class="flex items-center">
              Do you need an architecture service
              <img class="ml-10" src="../assets/icons/arrowBlack.png" width="24" height="24" alt="arrow">
            </p>
            <button class="btn px-30 py-15 bg-gray-primary border border-yellow-secondary  text-yellow-secondary uppercase hover:bg-yellow-primary hover:text-black-primary font-medium">Contact us</button>
        </div>
    </div>
  </div>
</template>

<script>
import AdvantageCard from './AdvantageCard.vue'
import ExampleCard from './ExampleCard.vue'
export default {
  name: "AboutContainer",

  components: {
    AdvantageCard,
    ExampleCard,
  },

  props: {
    name: {
      // required: true,
      type: String,
    },
  },
}

</script>

<style scoped>
.styleGrid:nth-child(1) {
  grid-column: 1 / 3;
  background-color: red;
  padding: 40px 0;
}

.styleGrid:nth-child(4n-1) {
  grid-column: 1 / 3;
  background-color: red;
  padding: 40px 0;
}

.styleGrid:nth-child(4n) {
  grid-column: 1 / 3;
  background-color: red;
  padding: 40px 0;
}
</style>