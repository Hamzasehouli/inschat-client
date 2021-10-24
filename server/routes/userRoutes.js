const express = require('express');
const userControllers = require('../controllers/userControllers.js');
const router = express.Router();

router
  .route('/')
  .get(userControllers.getAllUsers)
  .post(userControllers.addUser);

module.exports = router;
