<template>
  <div class="card w-full h-500 md:h-483 p-20 border border-t-yellow-primary relative cursor-pointer overflow-hidden">
    <div class="p-10 md:p-20 lg:p-30 pt-60 flex flex-col text-white-primary w-full h-full">
        <div class="flex-auto">
            <h3 class="font-bold text-xxl mb-15">Architecture</h3>
            <p class="line-clamp-4 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim nunc auctor diam porttitor malesuada tortor ipsum</p>
        </div>
        <div>
            <button class="btn px-30 py-15 text-sm font-medium text-yellow-secondary border border-yellow-secondary inline-block">Read more</button>
        </div>
    </div>
    <!-- <img src="../assets/img/servicesCardBg.png" class="absolute inset-0 object-cover object-center z-0" alt="author"> -->
  </div>
</template>

<script>
export default {
    name: "ServicesCard",

//   props: {
//     color: {
//       required: true,
//       type: String,
//     },
//   },
}
</script>

<style scoped>
.card {
    background: url('../assets/img/servicesCardBg.png') no-repeat top left;
    background-size: cover;
}
.card:hover .btn {
    color: black;
    background-color: #FFDA79;
}
</style>