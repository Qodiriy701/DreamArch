<template>
  <div class="grid lg:grid-cols-3 gap-30">
      <div class="box lg:col-span-2 relative">
        <p class="btn absolute hidden md:block top-15 right-15 px-30 py-15 border-2 font-semibold bg-black-primary text-yellow-primary border-yellow-secondary">Read more</p>
        <div class="w-full h-381 overflow-hidden">
          <img class="w-full h-full object-cover object-center" v-for="(img, index) in images" :key="index" v-if="index == count" :src="img.src" alt="img"/>
        </div>
        <div class="p-30 bg-black-primary">
          <h3 class="font-bold text-lg md:text-xl lg:text-xxl mb-15">Mirabad avenue</h3>
          <p class="line-clamp-2">Volutpat cras consectetur tellus congue tellus sapien, facilisis tortor. Nulla tristique pellentesque nisi nisi, elementum rhoncus. Accumsan cursus eu </p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="w-full">
          <div class="flex gap-15 mb-30">
            <div class="p-10 border border-white-primary cursor-pointer" @click="RemoveActive">
              <img src="../assets/icons/arrowLeft.png" width="27" height="27" alt="left"/>
            </div>
            <div class="p-10 border border-white-primary cursor-pointer" @click="AddActive">
              <img src="../assets/icons/arrowRight.png" width="27" height="27" alt="right">
            </div>
          </div>
          <div class="w-full h-180 bg-white-primary overflow-hidden relative hidden lg:block">
            <div class="opacityImg absolute top-0 left-0 w-full h-full"></div>
            <img class="w-full h-full object-cover object-center" v-for="(img, index) in images" :key="index" v-if="index == active" :src="img.src" alt="img">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "MainSwiperNext",

  data() {
    return {
        count: 0,
        active: 1,
        images: [
            { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg/1024px-1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg' },
            { id: 2, src: 'https://images4.alphacoders.com/378/37864.jpg' },
            { id: 3, src: 'https://wallpaper.dog/large/10950083.jpg' },
            { id: 4, src: 'https://wallpaperfordesktop.com/wp-content/uploads/2021/11/Nature-Wallpapers.jpg' },
            { id: 5, src: 'https://thumbs.dreamstime.com/b/green-leaf-texture-dew-drop-fresh-spring-nature-wallpaper-background-green-leaf-texture-dew-drop-fresh-nature-wallpaper-167543228.jpg' }
        ],
        imgLength: 5
    }
  },

  methods: {
    AddActive() {
      if (this.count < this.imgLength - 1) {
        this.count += 1
      } else {
        this.count = 0
      }

      if (this.active < this.imgLength - 1) {
        this.active += 1
      } else {
        this.active = 0
      }
    },
    RemoveActive() {
      if (this.count > 0) {
        this.count -= 1
      } else {
        this.count = this.imgLength - 1
      }
      if (this.active > 0) {
        this.active -= 1
      } else {
        this.active = this.imgLength - 1
      }
    },
  }
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
.opacityImg {
  background: rgba(0, 0, 0, 0.8);
}
</style>