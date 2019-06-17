let express = require('express');
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
let morgan = require('morgan')
let mongoose = require('mongoose')
let dbConfig = require("./config/dbConnection.js");

let app = express();

let port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(morgan('dev'));




app.set('view engine', 'ejs');
app.set('views', './app/views')

app.get("/city", (req, res) => {
    res.render('city.ejs')
})
app.get("/post", (req, res) => {
    res.render('post.ejs')
})

app.get("/addPost", (req, res) => {
    res.render('addPost.ejs')
})

app.use(require('./app/routes'));
/**
 * database connection
 */

mongoose.connect(dbConfig.getDbConnectionString(), {useNewUrlParser : true});


app.listen(port, () => {
    console.log("App is listening on port: " + port);
})