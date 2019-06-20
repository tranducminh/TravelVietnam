let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let citySchema = new Schema({
    nameID: String,
    name: String,
    images: [
        {
            src: String
        }
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

function findCityByNameID(cityNameID) {
    return new Promise((resolve, reject) => {
        cities.findOne({nameID : cityNameID}, (err, city) => {
            if(err){
                reject()
            }
            else{
                return resolve(city);
            }
        })
    })
}

function createCity(city) {
    cities.create(city, (err, results) => {

    })
}

module.exports = {
    getAllCities: getAllCities,
    findCityByNameID: findCityByNameID,
    createCity: createCity
}