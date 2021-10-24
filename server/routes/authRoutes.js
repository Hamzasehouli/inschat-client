const express = require('express');
const authControllers = require('../controllers/authControllers.js');
const router = express.Router();

router.route('/signup').post(authControllers.signup);
router.route('/login').post(authControllers.login);
router.route('/logout').post(authControllers.logout);
router.route('/forget-password').post(authControllers.forgetPassword);
router.route('/reset-password').post(authControllers.resetPassword);
router.route('/update-password').post(authControllers.updatePassword);
router.route('/update-data').post(authControllers.updateData);
router.route('/delete-account').post(authControllers.deleteAccount);

module.exports = router;
