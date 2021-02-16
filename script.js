// Nav

//Get DOM Elements
const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('nav');
const header = document.querySelector('header')

// Hamburger
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('change');
    header.classList.toggle('change');
});

// Form

// Get DOM Elements
const modal = document.querySelector('#contactModal');
const modalBtnD = document.querySelector('#modalBtn-d');
const modalBtnM = document.querySelector('#modalBtn-m');
const closeBtn = document.querySelector('.close');

// Events
modalBtnD.addEventListener('click', openModal);
modalBtnM.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
window.addEventListener('keydown', escKey);

// Open
function openModal() {
  modal.style.display = 'block';
  document.body.style.overflow ='hidden';
}

// Close
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow ='auto';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow ='auto';
  }
}

// Close Using ESC Key
function escKey(k) {
  if (k.key === 'Escape') {
    modal.style.display = 'none'
    document.body.style.overflow ='auto';
  }
}