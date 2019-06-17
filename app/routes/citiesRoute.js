let router = require('express').Router();
let citiesCtrl = require('../controllers').Cities;
let userCtrl = require('../controllers').User;

router.get('/cities', citiesCtrl.renderCitiesPage)

module.exports = router;