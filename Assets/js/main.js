const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');

let menuShow = false;

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!menuShow) {
        burger.classList.add('open')
        menuShow = true;
    } else {
        burger.classList.remove('open')
        menuShow = false;
    }
}
