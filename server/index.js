const path = require('path');
const express = require ('express');
const nodemon = require ('gulp-nodemon');

const clientPath = path.join(__dirname, '..');

const app = express();

app
    .use(express.static(clientPath))
    .set('views', path.join(__dirname, '../views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('index'))
    .listen(process.env.PORT || 3000);

  