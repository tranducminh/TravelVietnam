let postModel = require('../models').Post;
let cityModel = require('../models').City;

module.exports = {
    getPostsByCityNameID: getPostsByCityNameID,
    findCityByNameID: findCityByNameID
}

function getPostsByCityNameID(cityNameID) {
    return postModel.getPostsByCityNameID(cityNameID);
}

function findCityByNameID(cityNameID) {
    return cityModel.findCityByNameID(cityNameID);
}