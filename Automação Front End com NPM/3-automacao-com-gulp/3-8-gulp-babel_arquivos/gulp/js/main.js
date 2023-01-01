"use strict";

{
  var animaImg = function animaImg() {
    if (img.classList.contains('active')) {
      img.classList.remove('active');
    } else {
      img.classList.add('active');
    }
  };

  var img = document.querySelector('.modal-img');
  img.addEventListener('click', animaImg);
}
{
  var activeModal = function activeModal(e) {
    e.preventDefault();

    if (modal.classList.contains('active')) {
      modal.classList.remove('active');
      modalBtn.innerText = 'Abrir Modal';
    } else {
      modal.classList.add('active');
      modalBtn.innerText = 'Fechar Modal';
    }
  };

  var modalBtn = document.querySelector('.abrir-modal');
  var modal = document.querySelector('.modal');
  modalBtn.addEventListener('click', activeModal);
}