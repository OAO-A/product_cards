const express = require('express');
require('dotenv').config();
const modules = require('./modules/modules');
const PORT = process.env.PORT || 5000;
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/index.js');
const errorHandler = require('./middleweare/ErrorHandlingMiddleweare');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.static('public'));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
