const bgrMobMenu = document.querySelector('.xqxkiuzboi');
const mobMenuBtn = document.querySelector('.menu-toggle');
const menuMob = document.querySelector('.main-navigation');
const closeMob = document.querySelector('.slideout-exit');

mobMenuBtn.addEventListener('click', () => {
    bgrMobMenu.style.display = "block";
    menuMob.style.display = "block";
    menuMob.classList.add('offside');
});

closeMob.addEventListener('click', () => {
    bgrMobMenu.style.display = "none";
    menuMob.style.display = "none";
    menuMob.classList.remove('offside');
});