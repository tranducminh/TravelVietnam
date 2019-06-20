let router = require('express').Router();
let citiesCtrl = require('../controllers').Cities;
let userCtrl = require('../controllers').User;

//router.get('/cities/*',userCtrl.isLoggedIn)
router.route('/cities')
    .get(citiesCtrl.renderCitiesPage)
router.route('/')
    .get(citiesCtrl.renderCitiesPage)

module.exports = router;