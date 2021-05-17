const validation = () => {
  const formName = document.getElementsByName('fio'),
        formPhone = document.getElementsByName('tel');

  formName.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^а-яА-ЯёЁ' ']/g, '');
    });
  });
  
  formPhone.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^0-9+]/, '');
    });
  });
  
};

export default validation;