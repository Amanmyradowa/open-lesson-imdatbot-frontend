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


class ResponsiveGrid {

  wrapper;
  pagination;
  slides;
  sizeClass;
  sizeClassSmall;
  breakpoint;

  constructor(wrapperSelector, paginationSelector, slideClass, sizeClass) {
    this.wrapper = document.querySelector(wrapperSelector);
    this.pagination = document.querySelector(paginationSelector);
    this.slides = document.querySelectorAll(slideClass);
    this.sizeClass = sizeClass;
    this.breakpoint = 960;
  }

  resizeHandler() {
    const width = window.innerWidth;
    if (width > this.breakpoint) {
      this.disablePagination();
      this.resizeSlides(this.sizeClass);
    } else {
      this.enablePagination();
      this.resizeSlidesRemove(this.sizeClass);
    }
  }

  disablePagination() {
    this.pagination.classList.add('disabled');
    this.wrapper.classList.add('disabled');
  }

  enablePagination() {
    this.pagination.classList.remove('disabled');
    this.wrapper.classList.remove('disabled');
  }

  resizeSlides(sizeClass) {
    for (const slide of this.slides) {
      slide.classList.add(sizeClass);
    }
  }
  
  resizeSlidesRemove(sizeClass) {
    for (const slide of this.slides) {
      slide.classList.remove(sizeClass);
    }
  }
}

const grid = new ResponsiveGrid('.swiper .swiper-wrapper', '.swiper-pagination', '.swiper .swiper-slide','grid-image-description__item-size-30');

const grid1 = new ResponsiveGrid('.swiper1 .swiper-wrapper', '.swiper-pagination1', '.swiper1 .swiper-slide','grid-image-description__item-size-30');

const grid2 = new ResponsiveGrid('.swiper2 .swiper-wrapper', '.swiper-pagination2', '.swiper2 .swiper-slide','grid-image-description__item-size-22');

window.addEventListener('resize', () => {
  grid.resizeHandler();
  grid1.resizeHandler();
  grid2.resizeHandler();
});

grid.resizeHandler();
grid1.resizeHandler();
grid2.resizeHandler();
