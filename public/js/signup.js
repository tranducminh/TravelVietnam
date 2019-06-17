document.addEventListener("DOMContentLoaded", function () {
    let btn_signup = document.querySelector('#btnSignup')
    let form_signup = document.querySelector('#formSignup')

    btn_signup.onclick = function () {
        console.log("blabla")
        form_signup.submit();
    }
}, false)