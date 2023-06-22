const swiperDetailedPage = new Swiper('.swiper-detailed-page', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

const swiperDetailedPageVideo = new Swiper('.swiper-detailed-page-video', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});