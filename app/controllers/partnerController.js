let partnerService = require('../services').Partner;


module.exports = {
    creatPost: creatPost,
    renderAddPostPage: renderAddPostPage
}

function creatPost(req, res) {
    let imageTemp = [{}];

    if (req.files) {
        let i = 0;
        for (file in req.files) {
            //console.log(req.files[i].filename);
            src = {
                src: '/assets/images/upload/users/' + req.files[i].filename
            }
            imageTemp[i++] = src;
        }
    }

    let policyTemp = [{}];
    if(req.body.policy){
        let policyData = req.body.policy;

        for(i in policyData) {
            
            policyTemp[i] = {
                detail: policyData[i]
            }
        }
    }

    let scheduleTemp = [{}];
    let scheduleTimeData = req.body.scheduleTime;
    let scheduleTitleData = req.body.scheduleTitle;
    let scheduleDetailData = req.body.scheduleDetail;
    for (key in scheduleTimeData) {
        scheduleTemp[key] = {
            time: scheduleTimeData[key],
            title: scheduleTitleData[key],
            detail: scheduleDetailData[key]
        }
    }

    let post = {
        // partnerID: req.session.passport.user,
        partnerID: "5d0908be1c9d440000fa2ab9",
        name: req.body.name,
        departureDate: req.body.departureDate,
        departurePlace: req.body.departurePlace,
        time: req.body.time,
        vehicle: req.body.vehicle,
        cost: req.body.cost,
        schedule: scheduleTemp,
        policy: policyTemp,
        images: imageTemp
    }

    partnerService.creatPost(post).then((result) => {
        res.redirect('/post/' + result._id);
        
    })
}

function renderAddPostPage(req, res) {
    res.render("addPost.ejs");
}