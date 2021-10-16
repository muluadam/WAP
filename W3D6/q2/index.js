const express = require('express');
const app = express();
app.get('/', (req, res) => {
   res.send( "<!DOCTYPE html>"+
   "<html>"+
       "<head>"+
           "<title>My App</title>"+
       "</head>"+
       "<body>"+
           "<form action='/result' method='POST'>"+
               "<label>Name <input type='text' name='name'></label>"+
               "<label>Age <input type='text' name='age'></label>"+
               "<input type='submit' value='submit query'></label>"+
           "</form>"+
       "</body>"+
   "</html>");
});
app.post('/result', (req, res) => {
     let name = req.query.name;
    let age = req.query.age;

    age = (!age) ? "you age" : age;
    name = (!name) ? "person" : name;
    res.send(`Welcome ${name} and your age is: ${age}`);
});
app.listen(3000);