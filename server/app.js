const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const path = require('path');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const messengerRoutes = require('./routes/messengerRoutes');
const conversationRoutes = require('./routes/conversationRoutes');

const app = express();
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static('./public'));
app.use(morgan('tiny'));
app.use(function (req, res, next) {
  console.log(new Date());
  next();
});

app.use('/api/v1/messenger', messengerRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/conversation', conversationRoutes);

app.all('*', (req, res, next) => {
  next('err');
});

app.use((err, req, res, next) => {
  console.log('err');
});

module.exports = app;
