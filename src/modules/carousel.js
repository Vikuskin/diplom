const carousel = () => {
  const services = document.querySelector('.services-elements'),
        servicesElem = services.querySelectorAll('.card'),
        arrowRight = document.querySelector('.arrow-right'),
        arrowLeft = document.querySelector('.arrow-left');
  let currentSlide = 0;
  let left = 0;
  const startCarousel = () => {
    for (let i = 3; i < servicesElem.length; i++) {
      servicesElem[i].style.display = 'none';
    }
    for (let i = 0; i < 2; i++) {
      servicesElem[i].style.display = 'block';
    }
    left = 0;
  };

  const endCarousel = () => {
    for (let i = 3; i < servicesElem.length; i++) {
      servicesElem[i].style.display = 'block';
    }
    for (let i = 0; i < 3; i++) {
      servicesElem[i].style.display = 'none';
    }
    currentSlide = 3;
  };

  startCarousel();
  
  arrowRight.addEventListener('click', event => {
    servicesElem[currentSlide].style.display = 'none';
    currentSlide++;
    left++;
    console.log(currentSlide);
    console.log(left);

    if (currentSlide > 3) {
      startCarousel();
      currentSlide = 0;
    }
    servicesElem[currentSlide + 3].style.display = 'block';
  });

  
  arrowLeft.addEventListener('click', event => {
    servicesElem[currentSlide + 2].style.display = 'none';
    left--;
    currentSlide--;
      if (currentSlide < 0) {
        endCarousel();
        currentSlide = 3;
      }
    servicesElem[currentSlide].style.display = 'block';
    
  });

};

carousel();

// export default carousel;