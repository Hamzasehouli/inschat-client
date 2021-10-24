const bcrypt = require('bcrypt');
const User = require('../models/usersModel');

exports.signup = async (req, res, next) => {
  try {
    const obj = {
      gender: req.body.gender,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };
    user = await User.create(obj);
    res.status(201).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email && !password) {
    return console.log('please enter a valid email and password');
  }

  const user = await User.findOne({ email });
  if (!user) {
    return console.log('Email or password are incorrect');
  }
  if (!user.verifyPassword(password)) {
    return console.log('Email or password are incorrect');
  }
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
};
exports.forgetPassword = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.logout = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.resetPassword = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.updateData = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.updatePassword = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.deleteAccount = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
};
