'use strict';
var server = require('./src/server.js');
server()
  .listen(3000, function () {
    // eslint-disable-next-line no-console
    console.log('Server is running on localhost:3000');
  });
