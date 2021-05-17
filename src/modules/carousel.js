const carousel = () => {
  const services = document.querySelector('.services-elements'),
        servicesElem = services.querySelectorAll('.card'),
        arrowRight = document.querySelector('.arrow-right'),
        arrowLeft = document.querySelector('.arrow-left');
  let currentSlide = 0;

  const startCarousel = () => {
    for (let i = 3; i < servicesElem.length; i++) {
      servicesElem[i].style.display = 'none';
    }
    for (let i = 0; i < 2; i++) {
      servicesElem[i].style.display = 'block';
    }
  };

  const endCarousel = () => {
    for (let i = 3; i < servicesElem.length; i++) {
      servicesElem[i].style.display = 'block';
    }
    for (let i = 0; i < 4; i++) {
      servicesElem[i].style.display = 'none';
    }
  };

  startCarousel();
  
  arrowRight.addEventListener('click', () => {
    servicesElem[currentSlide].style.display = 'none';
    currentSlide++;

    if (currentSlide > 2) {
      startCarousel();
      currentSlide = 0;
    }
    servicesElem[currentSlide + 3].style.display = 'block';
  });

  
  arrowLeft.addEventListener('click', () => {
    if (currentSlide <= 0) {
      endCarousel();
      currentSlide = 3;
    } else {
      servicesElem[currentSlide + 3].style.display = 'none';
    }
    
    currentSlide--;
      
    servicesElem[currentSlide].style.display = 'block';
  });

};

export default carousel;