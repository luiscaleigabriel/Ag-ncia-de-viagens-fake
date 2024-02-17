const toggle = document.querySelector('#toggle');
const navbarMobile = document.querySelector('#navbar-mobile')

function openCloseMenu() {
    toggle.classList.toggle('tagOpen');
    navbarMobile.classList.toggle('openCloseMenu');
}

//Carrocel
document.getElementById('radio1').checked = true;
let cc = 1;
setInterval(() => {
    cc++;
    if(cc > 4) {
        cc = 1;
    }
    document.getElementById('radio'+cc).checked = true;
}, 5000)