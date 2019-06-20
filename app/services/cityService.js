let postModel = require('../models').Post;

module.exports = {
    getPostsByCityNameID: getPostsByCityNameID
}

function getPostsByCityNameID(cityNameID) {
    return postModel.getPostsByCityNameID(cityNameID);
}