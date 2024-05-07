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

    window.addEventListener('resize', this.resizeHandler.bind(this));

    this.resizeHandler();
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

class Countdown {
  constructor(targetDateTime, daysElement, clockElement, minutesElement, secondsElement) {
    this.targetDateTime = new Date(targetDateTime);
    this.daysElement = document.querySelector(daysElement);
    this.clockElement = document.querySelector(clockElement);
    this.minutesElement = document.querySelector(minutesElement);
    this.secondsElement = document.querySelector(secondsElement);

    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date();
    const millisecondsDiff = this.targetDateTime.getTime() - now.getTime();

    if (millisecondsDiff <= 0) {
      this.daysElement.textContent = '0';
      this.clockElement.textContent = '00';
      this.minutesElement.textContent = '00';
      this.secondsElement.textContent = '00';
      return;
    }

    const daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((millisecondsDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((millisecondsDiff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((millisecondsDiff % (1000 * 60)) / 1000);

    this.daysElement.textContent = daysDiff;
    this.clockElement.textContent = hoursLeft;
    this.minutesElement.textContent = minutesLeft;
    this.secondsElement.textContent = secondsLeft;
  }
}

const countdown = new Countdown('2024-05-31 18:00:00', '[data-date-day]', '[data-date-clock]', '[data-date-minut]', '[data-date-second]');
