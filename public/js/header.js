document.addEventListener("DOMContentLoaded",function(){
    let menu_icon_notAuthenticated = document.querySelector('.header__right__menuNotAuthenticated__icon');
    let user_icon_anthenticated = document.querySelector('.header__right__menuAuthenticated__user');
    let menu_notAuthenticated = document.querySelector('.header__right__menuNotAuthenticated__option');
    let menu_authenticated = document.querySelector('.header__right__menuAuthenticated__option');

    menu_icon_notAuthenticated.onclick = function () {
        menu_notAuthenticated.classList.toggle('display');
    }
    user_icon_anthenticated.onclick = function () {
        menu_authenticated.classList.toggle('display');
    }
},false);