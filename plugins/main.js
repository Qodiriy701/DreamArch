export default () => {
    letswiper = new Swiper('.mySwiper', {
      freeMode: true,
      pagination: {
        clickable:true,
      },
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      grabCursor: false,
      keyboard: {
        enabled: true,
      },
      spaceBetween: 15,
      loop: true,
      loopFillGroupWithBlank: false,
      slidesPerView: 4,
      slidesPerGroup: 4,
      breakpoints: {
        1090: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        920: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        750: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        // hide: true,
      },
    })
}
  