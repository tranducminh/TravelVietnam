let router = require('express').Router();

router.use('/', require('./userRoute'));
router.use('/', require('./citiesRoute'));
router.use('/', require('./postRoute'));

module.exports = router;