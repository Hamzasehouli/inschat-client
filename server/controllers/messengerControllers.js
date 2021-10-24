const Messenger = require('../models/messengerModel.js');

exports.getAllMessengers = async (req, res, next) => {
  const messengers = await Messenger.find();
  console.log(messengers);
  res.status(200).json({
    status: 'success',
  });
};
exports.createMessenger = async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
  return;
};
exports.getMessenger = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.updateMessenger = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.deleteMessenger = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
};
