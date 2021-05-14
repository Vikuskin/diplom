const getModal = () => {
  const modal = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay');

  modal.style.display = 'none';
  modalOverlay.style.display = 'none';

  document.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('callback-btn') || target.classList.contains('modal-close') || target.classList.contains('modal-overlay') || target.getAttribute('href') === '#application' || target.getAttribute('href') === '#feedback'){
      modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
      modalOverlay.style.display = modalOverlay.style.display === 'none' ? 'block' : 'none';
    }
  });
};

getModal();
// export default getModal;
