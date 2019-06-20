let cityService = require('../services').City

module.exports = {
    renderCityPage: renderCityPage
}

function renderCityPage(req, res) {
    cityService.getPostsByCityNameID(req.params.cityNameID).then((posts) => {
        res.render('city.ejs', {
            posts: posts
        })
    })
}