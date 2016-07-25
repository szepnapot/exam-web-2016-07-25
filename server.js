'use strict';

const cipher = require('./ceasarCipher');
const controller = require('./controller')(cipher);
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();

const port = process.env.PORT || 3000;
const oneDay = 86400000;

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res)
};

app.use(express.static(__dirname + '/views', { maxAge: oneDay }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression({filter: shouldCompress}));

app.post('/decode', controller.decode)

app.listen(port);
console.log("listening on " + port + "!");
