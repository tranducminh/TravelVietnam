let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let citySchema = new Schema({
    name: String,
    images: [
        
    ]
})

let cities = mongoose.model("city", citySchema); 

function getAllCities() {
    return new Promise((resolve, reject) => {
        
        cities.find((err, data) => {
            if(err){
                reject("ERROR: getAllCities")
            }
            else{
                console.log("model: " + data)
                return resolve(data);
            }
        })
        
    })
    
}

module.exports = {
    getAllCities: getAllCities
}