document.addEventListener("DOMContentLoaded", function () {
    let btn_signin = document.querySelector('#btnSignin')
    let form_signin = document.querySelector('#formSignin')

    btn_signin.onclick = function () {
        form_signin.submit();
    }
}, false)