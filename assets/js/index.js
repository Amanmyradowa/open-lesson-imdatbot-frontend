const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  // loop: true,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false, 
  // },

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    840: {
    slidesPerView: 1,
    slideToClickedSlide: true,
  }
  },

  speed: 1500,

});

const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 2,
  // loop: true,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false, 
  // },

  pagination: {
    el: '.swiper-pagination1',
  },

  breakpoints: {
    840: {
    slidesPerView: 1,
    slideToClickedSlide: true,
  }
  },

  speed: 1500,

});


let width = screen.width;


let swiperWrapper = document.querySelector('.swiper-wrapper');
let swiperPagination = document.querySelector('.swiper-pagination');

if(width > 840)
{
  swiperWrapper.classList.add('disabled');
  swiperPagination.classList.add('disabled');
}

// let swiperWrapper1 = document.querySelector('.swiper-wrapper1');
let swiperPagination1 = document.querySelector('.swiper-pagination1');

if(width > 840)
{
  swiperWrapper.classList.add('disabled');
  swiperPagination1.classList.add('disabled');
}
