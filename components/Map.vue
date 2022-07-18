<template>
  <div class="bg-black-primary">
    <div class="max-w-1520 w-full mx-auto relative">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3143113836945!2d69.21933655108172!3d41.32377817916829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9218cfada3%3A0xab4ee9e1ad3354e9!2s!5e0!3m2!1sru!2s!4v1656587900573!5m2!1sru!2s" class="w-full h-630 md:h-381 map"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="absolute bottom-60 left-0 right-40">
        <div class="container">
          <div class="w-full p-30 md:p-46 lg:p-60 max-w-670 connectBox">
            <a href="tel:+998977072711" class="font-medium text-Title md:text-mdTitle lg:text-lgTitle text-yellow-primary">(97) <span class="text-white-primary">707-27-11</span></a>
            <p class="text-lg md:text-xl text-white-primary leading-32">Toshkent shahar, Shayxontohur tumani, Gulobod mahallasi, 8-40</p>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
    name: "MapComponent"
}

</script>


<style scoped>
.map {
  filter: invert(85%);
  /* filter: contrast(2); */
}
.connectBox {
  background: rgba(23, 23, 23, 0.75);
  border-top: 2px solid #FFDA79;
  backdrop-filter: blur(10px);
}

</style>