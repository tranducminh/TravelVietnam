let router = require('express').Router();
let passport = require('passport');
let session = require('express-session');
let flash = require('connect-flash')
let configPassport = require('../../config/passport.js');
configPassport(passport)
router.use(passport.initialize()); //Khởi tạo passport-local
router.use(passport.session());
router.use(session({ secret: '1234567890' }));
router.use(flash());

/**
 * User
 */

let userCtrl = require('../controllers').User;
router.route('/signin')
    .get(userCtrl.renderLoginPage)
    .post(
        passport.authenticate('local-login', {
            successRedirect: '/', // đăng ký thành công điều hướng tới trang hiển thị profile
            failureRedirect: '/signin', // đăng ký không thành công thì điều hướng quay lại trang signup
            failureFlash: true
        })
    );

router.route('/signup')
    .get(userCtrl.renderSignupPage)
    .post(
        passport.authenticate('local-signup', {
            successRedirect: '/', // đăng ký thành công điều hướng tới trang hiển thị profile
            failureRedirect: '/signup', // đăng ký không thành công thì điều hướng quay lại trang signup
            failureFlash: true
        })
    );

router.route('/logout')
    .get(userCtrl.logout);




module.exports = router;
