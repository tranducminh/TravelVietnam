let postModel = require('../models').Post;


module.exports = {
    findPostByID: findPostByID
}

function findPostByID(postID) {
    return postModel.findPostByID(postID);
}