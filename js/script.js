const toggle = document.querySelector('#toggle');
const navbarMobile = document.querySelector('#navbar-mobile')

function openCloseMenu() {
    toggle.classList.toggle('tagOpen');
    navbarMobile.classList.toggle('openCloseMenu');
}
