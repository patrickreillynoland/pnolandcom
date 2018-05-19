const path = require('path');
const express = require ('express');

var clientPath = path.join(__dirname, '../client');

var app = express();

app.use(express.static(clientPath));
app.set('views', path.join(__dirname, '..'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
app.listen(process.env.PORT || 3000);

  