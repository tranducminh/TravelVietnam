let router = require('express').Router();
let cityCtrl = require('../controllers').City;

router.route('/:cityNameID')
    .get(cityCtrl.renderCityPage)

module.exports = router;