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
