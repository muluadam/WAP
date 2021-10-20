const express = require('express'); 


const app = express();

app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {

    let form=`    <form action="/result" method="post">
    <label for="name"><input type="text" name="name" id="name">Name</label>
    <label for="age"><input type="text" name="age" id="age">Age</label>
    <input type="submit" />
</form>`;

   res.send(form );
});
app.post('/result', (req, res) => {
console.log(req.body);
     let name = req.body.name;
    let age = req.body.age;


    age = (!age) ? "you age" : age;
    name = (!name) ? "person" : name;
    res.send(`Welcome ${name} and your age is: ${age}`);
});
app.listen(3000);