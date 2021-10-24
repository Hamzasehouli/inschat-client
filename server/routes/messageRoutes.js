const express = require('express');
const messageControllers = require('../controllers/messageControllers.js');
const authControllers = require('../controllers/authControllers');

const router = express.Router();

router
  .route('/')
  .get(messageControllers.getMessages)
  .post(messageControllers.createMessage);

router
  .route('/:userId')
  .get(messageControllers.getMessage)
  .patch(messageControllers.updateMessage)
  .delete(messageControllers.deleteMessage);

module.exports = router;
