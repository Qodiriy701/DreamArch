<template>
  <div class="box w-full md:h-335 border border-white-secondary relative hover:cursor-pointer">
    <p class="btn absolute hidden md:block top-15 right-15 px-30 py-15 border-2 font-semibold" :class="[index == '1' ? 'bg-yellow-primary text-black-primary border-yellow-secondary': 'bg-black-primary text-yellow-primary border-yellow-secondary']">Read more</p>
    <img src="../assets/img/house2.png" class="w-full h-154 md:h-full object-cover object-center" alt="house">
    <div class="bg block md:hidden p-15 text-white-primary">
        <h3 class="font-bold text-lg leading-24 md:text-lg mb-5">Mirabad avenue</h3>
        <p class="text-sm leading-21">Volutpat cras consectetur tellus congue tellus sapien, facilisis tortor. Nulla tristique pellentesque nisi nisi</p>
    </div>
    <div v-if="index === '1'" class="absolute hidden md:block bottom-0 w-full p-15 md:p-30 bg text-white-primary">
      <h3 class="font-bold text-xl leading-29 mb-5">Mirabad avenue</h3>
      <p class="text-base leading-24 line-clamp-2">Volutpat cras consectetur tellus congue tellus sapien, facilisis tortor. Nulla tristique pellentesque nisi nisi, elementum rhoncus. Acc</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "ExampleCard",

  props: {
    index: {
      // required: true,
      type: String,
    },
  },
}

</script>

<style scoped>
.btn {
  transition: 0.4s;
  cursor: pointer;
}

.box:hover .btn {
  color: #171717;
  transition: 0.4s;
  backdrop-filter: blur(10px);
  background-color: transparent;
}
.bg {
  background: rgba(23, 23, 23, 0.5);
  backdrop-filter: blur(10px);
}

@media screen and (max-width: 1024px) {

}

@media screen and (max-width: 768px) {
    
}
</style>