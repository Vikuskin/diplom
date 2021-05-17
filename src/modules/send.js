const send = () => {
  const form = document.getElementsByTagName('form'),
        statusMessage = document.createElement('div'),
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо, мы скоро свяжемся с вами',
        errorMessage = 'Что-то пошло не так',
        mistakeMessage = 'Некорректные данные';
  
  statusMessage.style.cssText = 'font-size: 2rem;';

  const closeModal = () => {
    const modal = document.querySelector('.modal-callback'),
        modalApp = document.getElementById('application'),
        modalOverlay = document.querySelector('.modal-overlay');
    modal.style.display = 'none';
    modalApp.style.display = 'none';
    modalOverlay.style.display = 'none';
  };

  for (let i = 0; i < form.length; i++) {

    form[i].addEventListener('submit', event => {
      event.preventDefault();
      form[i].appendChild(statusMessage);

      const formName = form[i].getElementsByTagName('input').fio,
            formPhone = form[i].getElementsByTagName('input').tel;
            console.log(formName);
            console.log(formPhone);

      if (formName.value === '' || formPhone.value === '' || formPhone.value.length < 7 || formPhone.value.length > 12) {
        statusMessage.textContent = mistakeMessage;
        return;
      }
      
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        statusMessage.textContent = loadMessage;
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          statusMessage.textContent = successMessage;
        } else {
          statusMessage.textContent = errorMessage;
        }
      });

      request.open('POST', './server.php');
      request.setRequestHeader('Content-Type', 'application/json');
      const formData = new FormData(form[i]);
      const data = {};
      for (const val of formData.entries()) {
        data[val[0]] = val[1];
      }
      request.send(JSON.stringify(data));

      const inputValue = Array.prototype.slice.call(document.getElementsByTagName('input'));
      inputValue.map(input => input.value = '');
      
      setTimeout(closeModal, 4000);
    });
    
  }
};

export default send;