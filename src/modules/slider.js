const slider = () => {
  const slider = document.querySelector('.top-slider'),
        slide = slider.querySelectorAll('.item'),
        table = slider.querySelectorAll('.table');

console.log(slide);
  // slide.forEach(() => {
  //   const dot = document.createElement('li');
  //   dot.classList.add('slick-dots');
  //   slider.append(dot);
  // });

  // const dot = document.querySelectorAll('.dot');
  // dot[0].classList.add('dot-active');

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(table, currentSlide, 'active');
    // prevSlide(dot, currentSlide, 'dot-active');

    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    nextSlide(table, currentSlide, 'active');
    // nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 1000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  // const stopSlide = () => {
  //   clearInterval(interval);
  // };

  // slider.addEventListener('click', event => {
  //   event.preventDefault();

  //   const target = event.target;

  //   if (!target.matches('.portfolio-btn, .dot')) {
  //     return;
  //   }

  //   prevSlide(slide, currentSlide, 'portfolio-item-active');
  //   prevSlide(dot, currentSlide, 'dot-active');

  //   if (target.matches('.portfolio-btn.next')) {
  //     currentSlide++;
  //   } else if (target.matches('.portfolio-btn.prev')) {
  //     currentSlide--;
  //   } else if (target.matches('.dot')) {
  //     dot.forEach((elem, index) => {
  //       if (elem === target) {
  //         currentSlide = index;
  //       }
  //     });
  //   }
  //   if (currentSlide >= slide.length) {
  //     currentSlide = 0;
  //   }

  //   if (currentSlide < 0) {
  //     currentSlide = slide.length - 1;
  //   }
  //   nextSlide(slide, currentSlide, 'portfolio-item-active');
  //   nextSlide(dot, currentSlide, 'dot-active');
  // });

  // slider.addEventListener('mouseover', event => {
  //   if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
  //     stopSlide();
  //   }
  // });

  // slider.addEventListener('mouseout', event => {
  //   if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
  //     startSlide();
  //   }
  // });

  startSlide();
};

slider();

// export default slider;