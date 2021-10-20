const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;

    age = (!age) ? "not mentioned" : age;
    name = (!name) ? "person" : name;
    res.send(`Welcome ${name} and your age is: ${age}`);
});
app.listen(3000);

 