let menuToggler = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let navItems = document.querySelectorAll('.nav-item');

menuToggler.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuToggler.classList.toggle('is-active');
    menu.classList.toggle('menu-active');
}