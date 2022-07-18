<template>
  <div class="w-292 border border-white-secondary border-t-2 border-t-yellow-secondary relative">
    <div class="p-30 relative box">
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper pellentesque eget venenatis, est urna. Congue augue risus eu, egestas aliquam lacus morbi. Duis amet nec eu turpis ut pharetra a facilisi. Purus morbi ornare sollicitudin in porttitor sit nerus mentos sollicitudin in porttitor sit nerus mentos.</p>
    </div>
    <div class="p-30 w-full flex items-center gap-15 bg-gray-primary">
        <div class="w-50 h-50 rounded-full overflow-hidden border border-white-secondary">
          <img src="../assets/img/author.jpg" class="w-full h-full object-cover object-top" alt="author" />
        </div>
        <p class="text-base font-semibold flex-wrap leading-24">Sardorbek Rashidov</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "AuthorDescCard"
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.text {
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.box::after {
  content: '';
  position: absolute;
  top: 15px;
  left: 15px;
  width: 15px;
  height: 12px;
  background: url('../assets/icons/qoshtirnoq1.png') no-repeat top left;
  background-size: 15px;
}

.box::before {
  content: '';
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 15px;
  height: 12px;
  background: url('../assets/icons/qoshtirnoq2.png') no-repeat top left;
  background-size: 15px;
}
</style>