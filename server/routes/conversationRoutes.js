const express = require('express');
const conversationControllers = require('../controllers/conversationControllers.js');
const authControllers = require('../controllers/authControllers');

const router = express.Router();

router
  .route('/')
  .get(conversationControllers.getConversations)
  .post(conversationControllers.createConversation);

router
  .route('/:userId')
  .get(conversationControllers.getConversation)
  .patch(conversationControllers.updateConversation)
  .delete(conversationControllers.deleteConversation);

module.exports = router;
