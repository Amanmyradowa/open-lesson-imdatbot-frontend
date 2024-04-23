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
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  rewind: true,

  pagination: {
    el: '.swiper-pagination1',
  },

  breakpoints: {

    960: {
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


const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 2,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination2',
  },

  breakpoints: {
    840: {
    slidesPerView: 2,
    slideToClickedSlide: true,
  }
  },

  speed: 1500,

});


let width = screen.width;


let swiperWrapper = document.querySelectorAll('.swiper-wrapper');
let swiperPagination = document.querySelector('.swiper-pagination');
let swiperSlide = document.querySelectorAll('.swiper-slide');
let swiperPagination1 = document.querySelector('.swiper-pagination1');
let swiperPagination2 = document.querySelector('.swiper-pagination2');


if(width > 960)
{
  swiperPagination.classList.add('disabled');
  swiperPagination1.classList.add('disabled');
  swiperWrapper[0].classList.add('disabled');
  swiperWrapper[1].classList.add('disabled');
  swiperWrapper[2].classList.add('disabled');
  for(let i=0; i<swiperSlide.length; i++)
  {
    swiperSlide[i].classList.add('grid-image-description__item-size-30');
  }
} else
{
  for(let i=0; i<swiperSlide.length; i++)
  {
    swiperSlide[i].classList.remove('grid-image-description__item-size-30');
  }

}



// let swiperPagination2 = document.querySelector('.swiper-pagination1');

// if(width > 840)
// {
//   swiperWrapper.classList.add('disabled');
//   swiperPagination2.classList.add('disabled');
// }
