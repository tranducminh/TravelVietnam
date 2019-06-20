let citiesService = require('../services').Cities;

module.exports = {
    renderCitiesPage: renderCitiesPage
}
function renderCitiesPage(req, res) {
    console.log(req.session);
    citiesService.getAllCities().then(_cities => {
        res.render("home.ejs",{     //cities.ejs
            cities: _cities
        })
    })
    
    // console.log("blabla: " + cityService.getAllCities())
}