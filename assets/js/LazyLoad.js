// let lazyImages = document.querySelectorAll('.lazy');

// let lazyImageObserver = new IntersectionObserver(entries => {

//   entries.forEach(entry => {
//     let img = entry.target;
//     let loaderContainer = img.parentElement;
//     let preloaderElement = loaderContainer.querySelector('.preloader');
//     img.setAttribute('loading', 'lazy');

//     if(entry.isIntersecting) {
//       img.src = img.dataset.src;
      
//       img.addEventListener('load', function() {
//         preloaderElement.classList.add('disactive');
//         loaderContainer.classList.remove('loading-theme__white');
//         loaderContainer.classList.remove('loading-theme__grey');
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

// 

function createPreloder() {
  const preloaderElement = document.createElement('div');
  preloaderElement.setAttribute('class','preloader')
  preloaderElement.innerHTML =  
    `<svg class="icon-size-preloader">
      <use xlink:href="./assets/icons/sprite.svg#loading"></use>
    </svg>`

    return preloaderElement;
}

let lazyImages = document.querySelectorAll('.lazy');

let lazyImageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    let img = entry.target;
    let loaderContainer = img.parentElement;
    
    img.parentElement.appendChild(createPreloder());
    let preloaderElement = loaderContainer.querySelector('.preloader');
    img.setAttribute('loading', 'lazy');
    
    if(entry.isIntersecting) {
      img.src = img.dataset.src;
      
      img.addEventListener('load', function() {
        loaderContainer.classList.remove('loading-theme__white');
        loaderContainer.classList.remove('loading-theme__grey');
        loaderContainer.removeChild(preloaderElement);
      });

      lazyImageObserver.unobserve(img);
    }

  })

}, {
  threshold: 1
});

lazyImages.forEach(lazyImage => {
  lazyImageObserver.observe(lazyImage);
})
