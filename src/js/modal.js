const modal = () => {
  const modalOpener = document.querySelector('.button');
  const modalCloser = document.querySelector('.modal__close');
  const modal = document.querySelector('.modal');

  const openModal = () => {
    modal.classList.add('modal--open');
  }

  const closeModal = () => {
    modal.classList.remove('modal--open');
  }

  modalOpener.addEventListener('click', openModal);
  modalCloser.addEventListener('click', closeModal);
}

export default modal;