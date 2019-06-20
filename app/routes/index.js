let router = require('express').Router();
let userCtrl = require('../controllers').User;


router.use('/', require('./userRoute'));
router.use('/', require('./citiesRoute'));
router.use('/post', require('./postRoute'));
router.use('/city', require('./cityRoute'));

router.get('/partner/*', userCtrl.isLoggedIn)
router.use('/partner', require('./partnerRoute'));

module.exports = router;