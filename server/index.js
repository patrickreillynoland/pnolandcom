const path = require('path');
const express = require ('express');

var clientPath = path.join(__dirname, '..');

var app = express();

app
    .use(express.static(clientPath))
    .set('views', path.join(__dirname, '../views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('index'))
    .listen(process.env.PORT || 3000, () => console.log(`Listening on ${PORT}`));

  