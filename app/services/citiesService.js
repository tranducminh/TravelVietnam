let City = require('../models').City;

module.exports = {
    getAllCities: getAllCities
}

function  getAllCities() {
    console.log(City.getAllCities())
    return City.getAllCities();
    
}