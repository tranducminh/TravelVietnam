let postService = require('../services').Post;

module.exports = {
    creatPost: creatPost
}

function creatPost(req, res) {
    let post = {
        partnerID: '5d0908be1c9d440000fa2ab9',
        name : req.body.name,
        departureDate: req.body.departureDate,
        departurePlace: req.body.departurePlace,
        time: req.body.time,
        vehicle: req.body.vehicle,
        cost: req.body.cost,
        schedule: [
            {
                time: req.body.scheduleTime,
                title: req.body.scheduleTitle,
                detail: req.body.scheduleDetail
            }
        ],
        policy: [
            {
                detail: req.body.policy
            }
        ]

    }
    
    if(postService.creatPost(post) == true){
        alert('Bạn đã đăng bài thành công');
        res.redirect('/cities/blabla')
    }
    
}