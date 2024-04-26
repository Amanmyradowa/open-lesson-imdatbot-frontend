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


let width = screen.width;

let swiperWrapper = document.querySelectorAll('.swiper-wrapper');
let swiperPagination = document.querySelector('.swiper-pagination');
let swiperSlide = document.querySelectorAll('.swiper .swiper-slide');
let swiperSlide1 = document.querySelectorAll('.swiper1 .swiper-slide');
let swiperSlide2 = document.querySelectorAll('.swiper2 .swiper-slide');
let swiperPagination1 = document.querySelector('.swiper-pagination1');
let swiperPagination2 = document.querySelector('.swiper-pagination2');


if(width > 960)
{
  swiperPagination.classList.add('disabled');
  swiperPagination1.classList.add('disabled');
  swiperPagination2.classList.add('disabled');
  swiperWrapper[0].classList.add('disabled');
  swiperWrapper[1].classList.add('disabled');
  swiperWrapper[2].classList.add('disabled');
  
  for(let i=0; i<swiperSlide.length; i++)
  {
    swiperSlide[i].classList.add('grid-image-description__item-size-30');
  }
  for(let i=0; i<swiperSlide1.length; i++)
  {
    swiperSlide1[i].classList.add('grid-image-description__item-size-30');

  }
  for(let i=0; i<swiperSlide2.length; i++)
  {
    swiperSlide2[i].classList.add('grid-image-description__item-size-22');
  }
} else
{
  for(let i=0; i<swiperSlide.length; i++)
  {
    swiperSlide[i].classList.remove('grid-image-description__item-size-30');
  }
  for(let i=0; i<swiperSlide1.length; i++)
  {
    swiperSlide1[i].classList.remove('grid-image-description__item-size-30');
  }
  for(let i=0; i<swiperSlide2.length; i++)
  {
    swiperSlide2[i].classList.remove('grid-image-description__item-size-22');
  }

}


// class ResponsiveGrid
// {

//   element;
//   wrapperSelector;
//   paginationSelector;
//   slideClass;
//   sizeClassLarge;
//   sizeClassSmall;

//   constructor(selectors = "")
//   {
//     this.element = document.querySelector(selectors);
//     this.wrapperSelector = this.element.querySelector();
//     this.paginationSelector = this.element.querySelector();
//   }
// }

// class ResponsiveGrid {
//   constructor(wrapperSelector, paginationSelector, slideClass, sizeClassLarge, sizeClassSmall) {
//     this.wrapper = document.querySelector(wrapperSelector);
//     this.pagination = document.querySelector(paginationSelector);
//     this.slides = document.querySelectorAll(slideClass);
//     this.sizeClassLarge = sizeClassLarge;
//     this.sizeClassSmall = sizeClassSmall;
//     this.breakpoint = 960;
//   }

//   resizeHandler() {
//     const width = screen.width;
//     if (width > this.breakpoint) {
//       this.disablePagination();
//       this.resizeSlides(this.sizeClassLarge);
//     } else {
//       this.enablePagination();
//       this.resizeSlides(this.sizeClassSmall);
//     }
//   }

//   disablePagination() {
//     this.pagination.classList.add('disabled');
//     this.wrapper.classList.add('disabled');
//   }

//   enablePagination() {
//     this.pagination.classList.remove('disabled');
//     this.wrapper.classList.remove('disabled');
//   }

//   resizeSlides(sizeClass) {
//     for (const slide of this.slides) {
//       slide.classList.remove(this.sizeClassLarge, this.sizeClassSmall);
//       slide.classList.add(sizeClass);
//     }
//   }
// }

// const grid1 = new ResponsiveGrid('.swiper-wrapper', '.swiper-pagination', '.swiper-slide','grid-image-description__item-size-30', 'grid-image-description__item-size-22');

// const grid2 = new ResponsiveGrid('.swiper1 .swiper-wrapper', '.swiper-pagination1', '.swiper1 .swiper-slide','grid-image-description__item-size-30', 'grid-image-description__item-size-22');
// // ... создайте больше экземпляров для других сеток при необходимости

// window.addEventListener('resize', () => {
//   grid1.resizeHandler();
//   grid2.resizeHandler();
//   // ... вызовите resizeHandler для других сеток
// });
