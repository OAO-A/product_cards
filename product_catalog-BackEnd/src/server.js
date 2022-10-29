'use strict';
exports.__esModule = true;
var express = require('express');
var app = express();
function server() {
  app.use('/', function (req, res) {
    res.send('hello');
  });
}
module.exports = {
  server: server
};
