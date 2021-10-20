const express = require('express');
const path = require("path")
const ejs = require('ejs');


const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
 app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.get('/', (req, res) =>{
    res.render('index')
})

 
app.post("/8ball", (req, res) => {
    if (!req.body.question) {
        res.status(400);
        res.end();
    }
    res.status(200);
    res.json({ 'answer': answers[Math.floor(Math.random() * answers.length)] });
});


app.listen(3000);


let answers=[ 
    "It is Certain",
 "It is decidedly so", 
 "Without a doubt",
  "Yes definitely",
   "You may rely on it", 
   "As I see it, yes", 
   "Most likely", 
   "Outlook good", 
   "Yes",
    "Signs point to yes", 
    "Reply hazy, try again",
     "Ask again later",
"Better not tell you now",
 "Cannot predict now",
  "Concentrate and ask again", 
  "Don't count on it",
"My reply is no",
 "My sources say no", 
 "Outlook not so good", 
 "Very doubtful" ];

