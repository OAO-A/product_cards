'use strict';
const server = require('./src/server.ts');
server().listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on localhost:3000');
});