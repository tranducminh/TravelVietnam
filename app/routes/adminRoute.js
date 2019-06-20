let router = require('express').Router();
let adminCtrl = require('../controllers').Admin;

let multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/upload/cities');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
let upload = multer({ storage: storage });


router.route('/add-city')
    .get(adminCtrl.renderAddCityPage)
    .post(upload.array('file', 30), adminCtrl.createCity)

module.exports = router;