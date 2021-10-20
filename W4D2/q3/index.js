  
const express = require('express');
//const router  = require("./router");
const path    = require('path');
const session = require('express-session');
const app     = express();
const router=express.Router();
app.use(session({
    secret: 'Alehegn Dagnachew',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.use(express.urlencoded({extended:false}));

app.use('/products', router);

app.listen(3000);