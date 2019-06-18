
module.exports = {
    renderLoginPage: renderLoginPage,
    renderSignupPage: renderSignupPage,
    logout: logout,
    isLoggedIn: isLoggedIn
}

function renderLoginPage(req, res) {
    res.render("signin.ejs");
}
function renderSignupPage(req, res) {
    res.render("signup.ejs")
}

function logout(req, res) {
    // req.session.passport.user = null;
    req.session.destroy(err => {

    });
    res.redirect('/signin');
  
}

function isLoggedIn(req, res, next) {
    if (req.session.passport){
        
        return next();
    }
    //console.log(req.session)
    return res.status(403).redirect('/signin');
    // res.redirect('/signin'); // nếu chưa đăng nhâp điều hướng quay lại trang chủ
}
