<template>
  <div class="card w-full border border-white-secondary relative cursor-pointer" :class="color">
    <img src="../assets/img/house3.png" class="w-full h-292 object-cover object-center" alt="author">
    <div class="p-30" :class="[color == 'bg-black-primary' ? 'text-white-primary': 'text-black-primary']">
        <div class="flex items-center gap-5 mb-10">
            <img v-if="color === 'bg-black-primary'" src="../assets/icons/time.png" width="18" height="18" alt="time">
            <img v-if="color === 'bg-white-primary'" src="../assets/icons/time2.png" width="18" height="18" alt="time">
            <span>about 10 hours ago</span>
        </div>
        <h3 class="font-bold text-lg line-clamp-4 mb-30">When the Architect Designs for Communities: 9 Popular Residential D...</h3>
        <button class="btn px-30 py-15 text-sm font-medium text-yellow-secondary border border-yellow-secondary" :class="[color == 'bg-black-primary' ? '': 'text-gray-primary']">Read more</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "ArticlesCard",

  props: {
    color: {
      required: true,
      type: String,
    },
  },
}
</script>

<style>
.card:hover .btn {
    color: black;
    background-color: #FFDA79;
}
</style>