let postService = require('../services').Post;

module.exports = {
    renderPostPage: renderPostPage
}

function renderPostPage(req, res) {
    postService.findPostByID(req.params.postID).then((post) => {
        //console.log(post)
        res.render("post.ejs", {
            post: post
        })
    })
}
