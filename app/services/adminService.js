let cityModel = require('../models').City;

module.exports = {
    createCity: createCity
}

function createCity(city) {
    cityModel.createCity(city);
}
