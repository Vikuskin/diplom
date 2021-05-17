const upArrow = () => { 
  const arrow = document.querySelector('.up');

  const servicesSection = document.querySelector('.services-section');
  const clientServSection = servicesSection.getBoundingClientRect();

  arrow.style.display = 'none';
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled >= clientServSection.top) {
      arrow.style.display = 'block';
    } else {
      arrow.style.display = 'none';
    }
  });
	arrow.addEventListener('click', () => { 
    const start = document.querySelector('.main-wrapper');
    start.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

upArrow();
// export default upArrow;