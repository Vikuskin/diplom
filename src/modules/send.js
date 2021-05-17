const send = () => {
  const form = document.getElementsByTagName('form'),
        statusMessage = document.createElement('div'),
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо, мы скоро свяжемся с вами',
        errorMessage = 'Что-то пошло не так',
        input = document.getElementsByTagName('input');

  statusMessage.style.cssText = 'font-size: 2rem;';

  for (let i = 0; i < form.length; i++) {

    form[i].addEventListener('submit', event => {
      event.preventDefault();
      form[i].appendChild(statusMessage);
      
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

      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
      
    });
  }
};

export default send;