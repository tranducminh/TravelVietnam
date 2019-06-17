
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
    req.logout();
    res.redirect('/signin');
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin'); // nếu chưa đăng nhâp điều hướng quay lại trang chủ
}
