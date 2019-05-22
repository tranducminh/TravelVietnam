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

app.get("/", (req, res) => {
    res.send("Blabla");
})
app.listen(port, () => {
    console.log("App is listening on port: " + port);
})