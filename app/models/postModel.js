let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema({
    cityNameID: String,
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
    ],
    images: [
        {
            src: String
        }
    ]
})

let posts = mongoose.model("post", postSchema); 


function creatPost(_post) {
    return new Promise((resolve, reject) => {
        posts.create(_post, (err, results) => {
            if(err){
                reject()
            }
            else{
                return resolve(results)
            }
        })
    })
    
}

function findPostByID(postID) {
    return new Promise((resolve, reject) => {
        posts.findOne({_id: postID}, (err, postData) => {
            if(err){
                reject('')
            }
            else{
                return resolve(postData)
            }
        })
    })
}

function getPostsByCityNameID(cityNameID) {
    return new Promise((resolve, reject) => {
        posts.find({cityNameID: cicityNameIDtyID}, (err, postsData) => {
            if(err){
                reject('')
            }
            else{
                return resolve(postsData)
            }
        })
    })
}

module.exports = {
    creatPost: creatPost,
    findPostByID: findPostByID,
    getPostsByCityNameID: getPostsByCityNameID
}