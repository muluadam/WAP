const express = require('express');

const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.set('css',path.join(__dirname, 'css'))
app.get('/', (req, res) => {
    const date = new Date();
    res.locals={
        time: date.toTimeString(),
        pageTitle:"My EJS PAge",
        cssPath:app.get('css'),
        viewPath:path.join(__dirname, 'view'),
        day: date.getHours() > 6 && date.getHours() <18,
    }
    res.render(path.join(app.get('views'),"index.ejs"));
});
app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3003);