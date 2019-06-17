let router = require('express').Router();
let citiesCtrl = require('../controllers').Cities;

router.route('/cities')
    .get(citiesCtrl.renderCitiesPage)

module.exports = router;