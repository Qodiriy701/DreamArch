<template>
  <div class="sticky py-10 md:py-15 top-0 w-full z-30 backdrop-blur bg-black-primary">
    <div class="container flex items-center justify-between">
      <div class="flex items-center z-40">
        <nuxt-link to="/"  @click.native="scrollToTop">
          <img class="cursor-pointer" width="152" height="77" src="@/assets/icons/brand.png" alt="DreamArch" />
        </nuxt-link>
      </div>

      <div class="hidden lg:flex items-center text-white-primary gap-60 cursor-pointer text-base">
        <nuxt-link class="leading-20" @click.native="scrollToTop" to="/services">Our services</nuxt-link>
        <nuxt-link class="leading-20" @click.native="scrollToTop" to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link class="leading-20" @click.native="scrollToTop" to="/about">About us</nuxt-link>
      </div>

      <div v-if="isMenuOpen !== false" class="fixed top-0 left-0 bottom-0 right-0 w-full">
        <div class="menu flex flex-col items-center justify-center w-full h-screen text-white-primary gap-20 text-lg pb-100">
          <a href="tel:+998977072711" class="flex items-center gap-15 mb-20">
            <img src="../assets/icons/phone.png" width="24" height="24" alt="phone">
            <span class="text-lg leading-24 text-white-primary">97 707-27-12</span>
          </a>
          <nuxt-link class="leading-20" @click.native="scrollToTop" to="/services">Our services</nuxt-link>
          <nuxt-link class="leading-20" @click.native="scrollToTop" to="/portfolio">Portfolio</nuxt-link>
          <nuxt-link class="leading-20" @click.native="scrollToTop" to="/about">About us</nuxt-link>
        </div>
      </div>

      <div class="flex items-center gap-10 text-white-primary">
        <a href="tel:+998977072711" class="md:flex items-center gap-15 hidden">
          <img src="../assets/icons/phone.png" width="24" height="24" alt="phone">
          <span class="text-lg leading-24">97 707-27-12</span>
        </a>
        
        <div class="burger" :class="{ 'toggle-x': isMenuOpen }" @click="isMenuOpen = !isMenuOpen">
          <div class="stick"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',

  data() {
    return {
      isMenuOpen: false,
    }
  },
  
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
      this.isMenuOpen = false
    },
  },
}
</script>

<style scoped>
.stick {
  width: 25px;
  height: 2px;
  background: white;
  margin: 8px 0;
  position: relative;
  transition: 0.3s;
}
.stick::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 0;
  width: 25px;
  height: 2px;
  background: white;
  transition: 0.3s;
}
.stick::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  width: 25px;
  height: 2px;
  background: white;
}

.burger {
  display: none;
  z-index: 999999999999999;
}
.menu {
  z-index: 999999;
  background: rgba(0, 0, 0, 0.808);
}

@media screen and (max-width: 1024px) {
  .burger {
    display: block;
  }
  .toggle-x .stick {
    transform: rotate(45deg);
  }
  .toggle-x .stick::after {
    transform: rotate(90deg);
    top: 0;
  }
  .toggle-x .stick::before {
    display: none;
  }
}
</style>
