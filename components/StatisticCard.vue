<template>
  <div :class="`StaticCard shrink-0 w-${width}  h-${width} border-4 rounded-full border-transparent ${bgColor}`">
    <div :class="`w-full h-full rounded-full flex flex-col items-center px-45 justify-center shrink-0 ${color}`">
      <h3 class="font-bold text-vll font-mak">{{width}}</h3>
      <p class="line-clamp-4 text-base max-w-202 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim nunc auctor diam porttitor malesuada tortor ipsum</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticCard",

  props: {
    color: {
      required: true,
      type: String,
    },
    bgColor: {
      required: true,
      type: String,
    }
  },

  data() {
    return {
      width: '322',
    }
  },

  methods: {
    CardWidth() {
      const element = document.querySelector('.StaticCard');
      this.width = element.scrollWidth; // offsetWidth  offsetHeight clientWidth

      const elements = document.querySelectorAll('.StaticCard');
      elements.forEach(card => {
        card.style.height = `${this.width + 8}px`;
        card.style.width = `${this.width + 8}px`;
      })
      console.log(this.width);
      setTimeout(() => { this.CardWidth() }, 100);
    }
  },

  mounted() {
    this.CardWidth()
  },
}
</script>

<style scoped>
.statistics__item {
  background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  background-repeat: no-repeat;
  background-position: center center, left top, right top, left bottom, right bottom;
  background-origin: content-box, border-box, border-box, border-box, border-box;
  background-clip: content-box, border-box, border-box, border-box, border-box;
}
.statistics__item:nth-child(3n-2) {
  background-image: linear-gradient(#282828, #282828),
    linear-gradient(30deg, #282828 36%, #282828 30%),
    linear-gradient(10deg, #ffda79 0%, #ffda79 0%),
    linear-gradient(300deg, #282828 36%, #282828 30%),
    linear-gradient(210deg, #ffda79 60%, #282828 30%);
}
.statistics__item:nth-child(3n-1) {
  background-image: linear-gradient(#282828, #282828),
    linear-gradient(30deg, #282828 36%, #282828 0%),
    linear-gradient(10deg, #ffda79 0%, #282828 0%),
    linear-gradient(300deg, #ffda79 66%, #ffda79 30%),
    linear-gradient(210deg, #282828 60%, #ffda79 30%);
}
.statistics__item:nth-child(3n) {
  background-image: linear-gradient(#282828, #282828),
    linear-gradient(30deg, #ffda79 36%, #ffda79 0%),
    linear-gradient(10deg, #ffda79 0%, #282828 0%),
    linear-gradient(300deg, #282828 36%, #ffda79 30%),
    linear-gradient(210deg, #282828 60%, #282828 30%);
}

.statistics__item2 {
  background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  background-repeat: no-repeat;
  background-position: center center, left top, right top, left bottom, right bottom;
  background-origin: content-box, border-box, border-box, border-box, border-box;
  background-clip: content-box, border-box, border-box, border-box, border-box;
}
.statistics__item2:nth-child(3n-2) {
  background-image: linear-gradient(#F4F4F4, #F4F4F4),
    linear-gradient(30deg, #F4F4F4 36%, #F4F4F4 30%),
    linear-gradient(10deg, #ffda79 0%, #ffda79 0%),
    linear-gradient(300deg, #F4F4F4 36%, #F4F4F4 30%),
    linear-gradient(210deg, #ffda79 60%, #F4F4F4 30%);
}
.statistics__item2:nth-child(3n-1) {
  background-image: linear-gradient(#F4F4F4, #F4F4F4),
    linear-gradient(30deg, #F4F4F4 36%, #F4F4F4 0%),
    linear-gradient(10deg, #ffda79 0%, #F4F4F4 0%),
    linear-gradient(300deg, #ffda79 66%, #ffda79 30%),
    linear-gradient(210deg, #F4F4F4 60%, #ffda79 30%);
}
.statistics__item2:nth-child(3n) {
  background-image: linear-gradient(#F4F4F4, #F4F4F4),
    linear-gradient(30deg, #ffda79 36%, #ffda79 0%),
    linear-gradient(10deg, #ffda79 0%, #F4F4F4 0%),
    linear-gradient(300deg, #F4F4F4 36%, #ffda79 30%),
    linear-gradient(210deg, #F4F4F4 60%, #F4F4F4 30%);
}

</style>