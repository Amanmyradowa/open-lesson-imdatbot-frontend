const swiper = new Swiper('.swiper', {
  slidesPerView: 6,
  spaceBetween: 0,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {

    960: {
      slidesPerView: 6,
      spaceBetween: 0
    },

    840: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    720: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    540: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },

  },

  speed: 1500,

});

const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  rewind: true,

  pagination: {
    el: '.swiper-pagination1',
  },

  breakpoints: {

    960: {
      slidesPerView: 3,
      spaceBetween: 0
    },

    840: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    720: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    540: {
      slidesPerView: 1,
      spaceBetween: 30
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },

  },

  speed: 1500,

});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,

  pagination: {
    el: '.swiper-pagination2',
  },

  breakpoints: {

    960: {
      slidesPerView: 6,
      spaceBetween: 0
    },

    840: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    720: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    540: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },

  },

  speed: 1500,

});

const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  rewind: true,

  pagination: {
    el: '.swiper-pagination3',
  },

  breakpoints: {

    960: {
      slidesPerView: 3,
      spaceBetween: 0
    },

    840: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    720: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    540: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },

  },

  speed: 1500,

});

const grid = new ResponsiveGrid('.swiper .swiper-wrapper', '.swiper-pagination', '.swiper .swiper-slide','grid-image-description__item-size-30');

const grid1 = new ResponsiveGrid('.swiper1 .swiper-wrapper', '.swiper-pagination1', '.swiper1 .swiper-slide','grid-image-description__item-size-30');

const grid2 = new ResponsiveGrid('.swiper2 .swiper-wrapper', '.swiper-pagination2', '.swiper2 .swiper-slide','grid-image-description__item-size-22');

const grid3 = new ResponsiveGrid('.swiper3 .swiper-wrapper', '.swiper-pagination3', '.swiper3 .swiper-slide','grid-image-description__item-size-30');

const countdown = new Countdown('2024-05-31 18:00:00', '[data-date-day]', '[data-date-clock]', '[data-date-minut]', '[data-date-second]');
