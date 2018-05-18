const path = require('path');
const express = require ('express');

var clientPath = path.join(__dirname, '../client');

var app = express();

app.use(express.static(clientPath));

app.listen(process.env.PORT || 3000);