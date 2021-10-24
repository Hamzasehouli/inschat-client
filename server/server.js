const mongoose = require('mongoose');
const app = require('./app.js');
const dotenv = require('dotenv');
// const path = require('path');
dotenv.config({ path: './config.env' });

const dataBase = process.env.DB;
const PASSWORD = process.env.DB_PASSWORD;
const DB = dataBase.replace('<password>', PASSWORD);
mongoose.connect(DB).then(() => {
  console.log('DB is connected successfully');
});

app.listen(8080, () => {
  console.log('server is running');
});
