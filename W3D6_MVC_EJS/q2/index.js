const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
   res.render("form")
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if(!age){
        age="unknown";
    }
    res.render("result",{name:name,age:age});
//    console.log(`name= ${name}`);
//    console.log(`Age=${age}`);
   
});
app.listen(3000);