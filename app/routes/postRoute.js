let router = require('express').Router();
let postCtrl = require('../controllers').Post;

router.route('/add-post')
    .post(postCtrl.creatPost)

module.exports = router;