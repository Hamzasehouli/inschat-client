const express = require('express');
const messengerControllers = require('../controllers/messengerControllers');
const router = express.Router();

router
  .route('/')
  .get(messengerControllers.getAllMessengers)
  .post(messengerControllers.createMessenger);

router
  .route('/:messengerId')
  .get(messengerControllers.getMessenger)
  .patch(messengerControllers.updateMessenger)
  .delete(messengerControllers.deleteMessenger);

module.exports = router;
