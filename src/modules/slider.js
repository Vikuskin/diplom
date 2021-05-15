const slider = () => {
  const slider = document.querySelector('.top-slider'),
        slide = slider.querySelectorAll('.item'),
        table = slider.querySelectorAll('.table');
  
  const slickDots = document.createElement('div');
  slickDots.classList.add('slick-dots');
  slider.append(slickDots);
  slide.forEach(() => {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    slickDots.append(dot);
  });

  const dot = slickDots.querySelectorAll('li');
  dot[0].classList.add('slick-active');

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
  
  const autoPlaySlide = () => {
  
    prevSlide(slide, currentSlide, 'item-active');
    prevSlide(table, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'slick-active');
    
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    
    nextSlide(slide, currentSlide, 'item-active');
    nextSlide(table, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'slick-active');
    // if (currentSlide === 0) {
    //   slide[2].style.display = 'none';
    //   slide[currentSlide].style.display = 'block';
    // } else {
    //   slide[currentSlide - 1].style.display = 'none';
    //   slide[currentSlide].style.display = 'block';
    // }
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', event => {
    const target = event.target;

    if (!target.matches('.dot')) {
      return;
    }

    prevSlide(slide, currentSlide, 'item-active');
    prevSlide(table, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'slick-active');

    if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }
    
    nextSlide(slide, currentSlide, 'item-active');
    nextSlide(table, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'slick-active');
  });

  slider.addEventListener('mouseover', event => {
    if (event.target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide();
};

slider();

// export default slider;