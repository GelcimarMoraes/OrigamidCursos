{

const img = document.querySelector('.modal-img');

function animaImg() {
  if(img.classList.contains('active')) {
    img.classList.remove('active');
  } else {
    img.classList.add('active');
  }
}

img.addEventListener('click', animaImg);

}
{
const modalBtn = document.querySelector('.abrir-modal');
const modal = document.querySelector('.modal');

function activeModal(e) {
  e.preventDefault();
  if(modal.classList.contains('active')) {
    modal.classList.remove('active');
    modalBtn.innerText = 'Abrir Modal';
  } else {
    modal.classList.add('active');
    modalBtn.innerText = 'Fechar Modal';
  }
}

modalBtn.addEventListener('click', activeModal);
}