const getModal = () => {
  const modal = document.querySelector('.modal-callback'),
        modalApp = document.getElementById('application'),
        inputApp = document.getElementById('applicationInput'),
        modalOverlay = document.querySelector('.modal-overlay');

  modal.style.display = 'none';
  modalOverlay.style.display = 'none';

  document.addEventListener('click', event => {
    const target = event.target;

    if (target.getAttribute('href') === '#application') {
      inputApp.value = target.dataset.application;
      modalApp.style.display = 'block';
      modalOverlay.style.display = 'block';
    } 
    if (target.classList.contains('callback-btn') || target.classList.contains('modal-close') || target.getAttribute('href') === '#feedback'){
      modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
      modalOverlay.style.display = modalOverlay.style.display === 'none' ? 'block' : 'none';
    } else if (target.classList.contains('modal-overlay')){
      modalOverlay.style.display = modalOverlay.style.display === 'none' ? 'block' : 'none';
      modalApp.style.display = 'none';
      modal.style.display = 'none';
    }
  
  });
};

export default getModal;
