'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const express = require('express');
const app = express();
function server() {
  app.use('/', (req, res) => {
    res.send('hello');
  });
}
module.exports = {
  server,
};
