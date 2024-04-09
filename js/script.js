const toggle = document.querySelector('#toggle');
const navbarMobile = document.querySelector('#navbar-mobile')

function openCloseMenu() {
    toggle.classList.toggle('tagOpen');
    navbarMobile.classList.toggle('openCloseMenu');
}
 
//Menu Scrool
const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
    header.classList.toggle('rolagem', window.scrollY > 0);
});