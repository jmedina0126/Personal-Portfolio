const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('nav');
const header = document.querySelector('header')

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

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}