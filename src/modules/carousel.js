const carousel = () => {
  const services = document.querySelector('.services-elements'),
        servicesElem = services.querySelectorAll('.element');
  const arrow = document.querySelectorAll('.arrow-right');
  console.log(arrow);
  console.log(servicesElem);
  for (let i = 3; i < servicesElem.length; i++) {
    servicesElem[i].style.display = 'none';
  }
  let show = 0;
  
  document.addEventListener('click', event => {
  const target = event.target;
  const t = servicesElem.length;
    if (target.classList.contains('arrow-left')){
      if (show === 0) {
        servicesElem[t-1].style.display = 'block';
        servicesElem[show].style.display = 'none';
        show = t - 1; 
      } else {
        servicesElem[show - 1].style.display = 'block';
        servicesElem[show].style.display = 'none';
        show--;
      } 
      if (target.classList.contains('arrow-right')) {
        if (show === t - 1) {
          servicesElem[0].style.display = 'block';
          servicesElem[show].style.display = 'none';
          show = 0;
        } else {
          servicesElem[show + 1].style.display = 'block';
          servicesElem[show].style.display = 'none';
          show++;
        }
      }
    }
  });

};

carousel();

// export default carousel;