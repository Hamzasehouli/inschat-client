const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const friendRoutes = require('./routes/friendRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const ErrorHandler = require('./utilities/ErrorHandler');
const errorController = require('./controllers/errorController.js');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
// app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());

// const limiter = rateLimit({
//   windowMs: 60 * 60 * 1000, // 1h minutes
//   max: 100, // limit each IP to 100 requests per windowMs
// });

// //  apply to all requests
// app.use(limiter);
app.use(helmet());
app.disable('x-powered-by');
app.use(express.static('public'));

app.use(function (req, res, next) {
  console.log(new Date());
  next();
});

app.use(morgan('tiny'));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/messages', messageRoutes);
app.use('/api/v1/conversations', conversationRoutes);
app.use('/api/v1/friends', friendRoutes);

app.all('*', function (req, res, next) {
  next(new ErrorHandler(404, 'no such route found on this api '));
});

app.use(errorController);

module.exports = app;
