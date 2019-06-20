let router = require('express').Router();
let citiesCtrl = require('../controllers').Cities;
let userCtrl = require('../controllers').User;

//router.get('/cities/*',userCtrl.isLoggedIn)
router.get('/cities/blabla', citiesCtrl.renderCitiesPage)

module.exports = router;