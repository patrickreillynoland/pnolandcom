const path = require('path');
const express = require ('express');
const secure = require('ssl-express-www');

const clientPath = path.join(__dirname, '..');

const app = express();

app
    .use(secure)
    .use(express.static(clientPath))
    .set('views', path.join(__dirname, '../views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('index'))
    .listen(process.env.PORT || 3000);

  