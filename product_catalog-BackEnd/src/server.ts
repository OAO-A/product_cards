const express = require('express');

const app = express();

function server() {
  app.use('/', (req: Express.Request, res: { send: (arg0: string) => void; }) => {
    res.send('hello');
  });
}
module.exports = {
  server,
};

export{};