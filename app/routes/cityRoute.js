let router = require('express').Router();
let cityCtrl = require('../controllers').City;

router.route('/:cityNameID')
    .get(cityCtrl.renderCityPage)
router.param('cityNameID', cityCtrl.findOne)

module.exports = router;