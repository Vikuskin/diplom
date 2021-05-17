const validation = () => {
  const formName = document.querySelector('.form-control'),
        formPhone = document.querySelector('.tel');


  formName.addEventListener('input', () => {
    formName.value = formName.value.replace(/[^а-яА-ЯёЁ' ']/g, '');
  });

  formPhone.addEventListener('input', () => {
    formPhone.value = formPhone.value.replace(/[^0-9+]/, '');
  });
};

export default validation;