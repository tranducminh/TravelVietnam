let partnerModel = require('../models').Partner;
let postModel = require('../models').Post;

module.exports = {
    findPartnerByID: partnerModel.findPartnerByID,
    creatPost: createPost
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        partnerModel.findPartnerByID(post.partnerID).then((partner) => {
            //console.log("partner: " + post.partnerID);
            if (partner) {
                //console.log("active: " + partner.active)
                if (partner.active === true) {
                    postModel.creatPost(post).then((post) => {
                        //alert('Đăng bài thành công')
                        console.log('active true')
                        return resolve(post);
                    });

                }
                else {
                    console.log('active false')
                    // alert('Tài khoản của bạn không được phép đăng bài')
                    return reject(false);
                }
            }
            else {
                console.log('partnerID false')
                // alert('Tài khoản của bạn không được phép đăng bài')
                return reject(false);
            }
        })

    })

}

