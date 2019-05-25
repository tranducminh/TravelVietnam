let express = require('express');
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
let morgan = require('morgan')


let app = express();

let port = process.env.port || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', './app/views')

app.get("/", (req, res) => {
    res.render('header.ejs')
})

/**
 * database connection
 */
let mongoose = require('mongoose')
let dbConfig = require("./config/dbConnection.js");
mongoose.connect(dbConfig.getDbConnectionString(), {useNewUrlParser : true});


app.listen(port, () => {
    console.log("App is listening on port: " + port);
})