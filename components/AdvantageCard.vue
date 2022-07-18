<template>
  <div class="box w-full py-30 px-15 flex flex-col justify-center items-center border border-white-secondary border-t-yellow-secondary relative">
    <div class="w-54 h-54 shrink-0 mb-30 rounded-full border border-white-secondary flex items-center justify-center z-10">
        <img src="../assets/icons/like.png" width="24" height="24" class="object-cover object-center" alt="about">
    </div>
    <img class="absolute top-60 right-15" src="../assets/icons/like2.png" alt="icon">
    <h3 class="font-bold text-lg md:text-xl leading-28 mb-5 z-10">Advantage</h3>
    <p class="text-center text-base leading-24 line-clamp-4 z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim nunc auctor diam porttitor malesuada tortor ipsum</p>
  </div>
</template>

<script>
export default {
    name: "AdvantageCard"
}
</script>