let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt-nodejs');

let partnerSchema = new Schema({
    local: {
        id: String,
        username: String,
        password: String,
        companyName: String,
        companyEmail: String,
        phoneNumber: String,
        address: String,
        information: String,
        images: [
            {
                src: String
            }
        ],
        active: Boolean
    }
})

/**
 * Tạo mã hóa mật khẩu
 */
partnerSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

/**
 * Kiểm tra mật khẩu có trùng khớp
 */
partnerSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
}

let partners = mongoose.model("partner", partnerSchema);     //lưu schema vào database

function findPartnerByID(partnerID) {
    //console.log(partnerID);
    return new Promise((resolve, reject) => {
        partners.findOne({_id: partnerID}, (err, partner) => {
            if(err){
                reject('blabla')
            }
            else{
                console.log("partnerModel: " + partner.local);
                return resolve(partner.local);
            }
        })
    })
    
}

function checkActive(partnerID) {
    return new Promise((resolve, reject) => {
        partners.findOne({_id: partnerID}, (err, partner) => {
            if(err){
                reject('')
            }
            else{
                return resolve(partner.local.active);
            }
        })
    })
}

module.exports = {
    partners: partners,
    findPartnerByID: findPartnerByID,
    checkActive: checkActive
};