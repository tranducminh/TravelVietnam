let cityService = require('../services').City

module.exports = {
    renderCityPage: renderCityPage,
    findOne: findCityByNameID
}

function renderCityPage(req, res) {
    cityService.getPostsByCityNameID(req.params.cityNameID).then((posts) => {
        console.log(posts);
        res.render('city.ejs', {
            posts: posts,
            city: req.city
        })
    })
}

function findCityByNameID(req, res, next, cityNameID) {
    cityService.findCityByNameID(cityNameID).then((city) => {
        req.city = city;
        return next();
    })
    .catch(err => next(err));
}