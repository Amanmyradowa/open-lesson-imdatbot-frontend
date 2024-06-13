// function createPreloader() {
//   const preloaderElement = document.createElement('div');
//   preloaderElement.setAttribute('class','preloader')
//   preloaderElement.innerHTML =  
//     `<svg class="icon-size-preloader">
//       <use xlink:href="./assets/icons/sprite.svg#loading"></use>
//     </svg>`

//     return preloaderElement;
// }

// let lazyImages = document.querySelectorAll('.lazy');
// lazyImages.forEach(image => {
//   image.parentElement.appendChild(createPreloader());
//   image.setAttribute('loading', 'lazy');
// })

// let lazyImageObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     let img = entry.target;
//     let loaderContainer = img.parentElement;
    
//     if(entry.isIntersecting) {
//       img.src = img.dataset.src;
      
//       img.addEventListener('load', function() {
//         let preloaderElement = this.parentElement.querySelector('.preloader');
//         loaderContainer.classList.remove('loading-theme__white');
//         loaderContainer.classList.remove('loading-theme__grey');
//         loaderContainer.removeChild(preloaderElement);
//       });

//       lazyImageObserver.unobserve(img);
//     }

//   })

// }, {
//   threshold: 1
// });

// lazyImages.forEach(lazyImage => {
//   lazyImageObserver.observe(lazyImage);
// })

class Preloader {
  constructor(parentElement, imageElement) {
    this.parentElement = parentElement;
    this.imageElement = imageElement;

    this.createPreloader();
    this.attachPreloader();
    this.observeImage();
  }

  createPreloader() {
    const preloaderElement = document.createElement('div');
    preloaderElement.classList.add('preloader');
    preloaderElement.innerHTML = `
      <svg class="icon-size-preloader">
        <use xlink:href="./assets/icons/sprite.svg#loading"></use>
      </svg>`;

    this.preloaderElement = preloaderElement;
  }

  attachPreloader() {
    this.imageElement.setAttribute('loading', 'lazy');
    this.parentElement.appendChild(this.preloaderElement);
  }

  observeImage() {
    const lazyImageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.imageElement.src = this.imageElement.dataset.src;

          this.imageElement.addEventListener('load', () => {
            this.parentElement.classList.remove('loading-theme__white');
            this.parentElement.classList.remove('loading-theme__grey');
            this.parentElement.removeChild(this.preloaderElement);
          });

          lazyImageObserver.unobserve(this.imageElement);
        }
      });
    });

    lazyImageObserver.observe(this.imageElement);
  }
}

const lazyImages = document.querySelectorAll('.lazy');
lazyImages.forEach(image => {
  new Preloader(image.parentElement, image);
});