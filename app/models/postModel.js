let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema({
    partnerID: String,
    name : String,
    departureDate: String,
    departurePlace: String,
    time: String,
    vehicle: String,
    cost: String,
    schedule: [
        {
            time: String,
            title: String,
            detail: String
        }
    ],
    policy: [
        {
            detail: String
        }
    ]
})

let post = mongoose.model("post", postSchema); 


function creatPost(_post) {
    post.create(_post, (err, results) => {
        console.log(results);
    })
}

module.exports = {
    creatPost: creatPost
}