let router = require('express').Router();
let postCtrl = require('../controllers').Post;

router.route('/:postID')
    .get(postCtrl.renderPostPage)

module.exports = router;