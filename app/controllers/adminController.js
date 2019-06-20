let adminService = require('../services').Admin;

module.exports = {
    renderAddCityPage: renderAddCityPage,
    createCity: createCity
}

function renderAddCityPage(req, res) {
    res.render('addCity.ejs');
}

function createCity(req, res) {
    let imageTemp = [{}];

    if (req.files) {
        let i = 0;
        for (file in req.files) {
            //console.log(req.files[i].filename);
            src = {
                src: '/assets/images/upload/cities/' + req.files[i].filename
            }
            imageTemp[i++] = src;
        }
    }

    let city = {
        nameID: req.body.nameID,
        name: req.body.name,
        images: imageTemp
    }

    adminService.createCity(city);
}