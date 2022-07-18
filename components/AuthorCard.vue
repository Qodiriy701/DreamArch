<template>
  <div class="w-full h-285 border border-white-secondary border-t-2 border-t-yellow-secondary relative">
    <img src="../assets/img/author.jpg" class="w-full h-full object-cover object-center" alt="author">
    <div class="py-30 px-15 absolute w-full bottom-0 left-0 ring-0 bg text-white-primary">
        <h2 class="font-bold text-lg mb-5">Bobir Radjabov</h2>
        <p class="text-xs">Interyer dizayner</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "AuthorCard"
}
</script>

<style>
.bg {
    background: rgba(23, 23, 23, 0.5);
    backdrop-filter: blur(10px);
}
</style>