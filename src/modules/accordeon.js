const accordeon = () => {
  const accordeon = document.querySelector('.accordeon'),
        accordeonElem = accordeon.querySelectorAll('.element'),
        accordeonTitle = accordeon.querySelectorAll('.title'),
        accordeonContent = accordeon.querySelectorAll('.element-content');
  
  accordeonElem[0].classList.add('active');
  accordeonContent[0].classList.add('active');

  const deleteElem = () => {
    accordeonElem.forEach((item) => {
      item.classList.remove('active');
    });
    accordeonContent.forEach((item, i) => {
      item.classList.remove('active');
    });
  };

  for (let i = 0; i < accordeonElem.length; i++) {
    accordeonTitle[i].addEventListener('click', () => {
      deleteElem();
      accordeonElem[i].classList.add('active');
      accordeonContent[i].classList.add('active');
    });
  }

};

accordeon();
// export default accordeon;
