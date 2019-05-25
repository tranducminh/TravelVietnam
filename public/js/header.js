document.addEventListener("DOMContentLoaded",function(){
    let menu_icon = document.querySelector('.header__right__menu__icon');
    let menu = document.querySelector('.header__right__menu__option');

    menu_icon.onclick = function () {
        menu.classList.toggle('display');
    }
},false);