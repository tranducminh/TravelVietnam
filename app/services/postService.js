let postModel = require('../models').Post;
let partnerModel = require('../models').Partner;

module.exports = {
    creatPost: createPost
}

function createPost(post) {
    partnerModel.findPartnerByID(post.partnerID).then((partner) => {
        //console.log("partner: " + post.partnerID);
        if (partner) {
            //console.log("active: " + partner.active)
            if (partner.active === true) {
                postModel.creatPost(post);
                // alert('Đăng bài thành công')
                console.log('active true')
                return true;
            }
            else {
                console.log('active false')
                // alert('Tài khoản của bạn không được phép đăng bài')
                return false;
            }
        }
        else {
            console.log('partnerID false')
            // alert('Tài khoản của bạn không được phép đăng bài')
            return false;
        }
    });


}