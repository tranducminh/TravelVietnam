let router = require('express').Router();

router.use('/', require('./userRoute'));
router.use('/', require('./citiesRoute'));

module.exports = router;