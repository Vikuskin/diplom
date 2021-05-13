const getMenu = () => {
  const topMenu = document.querySelector('.top-menu'),
  link = topMenu.querySelectorAll('ul>li>a');
  
  link.forEach(item => item.addEventListener('click',
    e => {
      e.preventDefault();
      const id = item.getAttribute('href').slice(1);
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });

    }));
};

getMenu();
// export default getMenu;