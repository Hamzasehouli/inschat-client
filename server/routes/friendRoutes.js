const express = require('express');
const friendControllers = require('../controllers/friendControllers.js');
const authControllers = require('../controllers/authControllers');

const router = express.Router();

router
  .route('/')
  .get(friendControllers.getFriends)
  .post(friendControllers.createFriend);

router
  .route('/:userId')
  .get(friendControllers.getFriend)
  .patch(friendControllers.updateFriend)
  .delete(friendControllers.deleteFriend);

module.exports = router;
