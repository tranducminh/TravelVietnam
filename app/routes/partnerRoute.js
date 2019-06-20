let router = require('express').Router();
let partnerCtrl = require('../controllers').Partner;

let multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/upload/users');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
let upload = multer({ storage: storage });

router.route('/add-post')
    .get(partnerCtrl.renderAddPostPage)
    .post(upload.array('file', 30), partnerCtrl.creatPost)



module.exports = router;