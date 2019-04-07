const path = require('path');
const express = require ('express');
const nodemon = require ('gulp-nodemon');

const clientPath = path.join(__dirname, '..');

const app = express();

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
      return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
  }

app
    .use(express.static(clientPath))
    .use(requireHTTPS)
    .set('views', path.join(__dirname, '../views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('index'))
    .listen(process.env.PORT || 3000);

  