const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('nav');
const header = document.querySelector('header')

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('change');
    header.classList.toggle('change');
});

// Form
