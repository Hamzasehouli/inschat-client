const AsyncHandler = require('../utilities/AsyncHandler.js');
const Message = require('../models/messageModel.js');

exports.getMessages = AsyncHandler(async function (req, res, next) {
  const messages = await Message.find();
  res.status(200).json({
    status: 'success',
    results: messages.length,
    data: {
      messages,
    },
  });
});

exports.createMessage = AsyncHandler(async function (req, res, next) {
  const obj = {
    gender: req.body.gender,
    firstName: req.body.firstName,
    text: req.body.text,
  };
  const message = await Message.create(obj);
  res.status(201).json({
    status: 'success',
    data: {
      message,
    },
  });
});

exports.getMessage = AsyncHandler(async function (req, res, next) {
  const message = await Message.findById(req.params.messageId);
  res.status(200).json({
    status: 'success',
    data: {
      message,
    },
  });
});

exports.updateMessage = AsyncHandler(async function (req, res, next) {
  //   let obj = {};
  //   const { firstName, lastName, userName, email, password } = req.body;

  //   if (password) {
  //     return next(
  //       new ErrorHandler(400, 'Please use the adequat url to update password')
  //     );
  //   }
  //   if (firstName) {
  //     obj.firstName = firstName;
  //   }
  //   if (lastName) {
  //     obj.lastName = lastName;
  //   }
  //   if (userName) {
  //     obj.userName = userName;
  //   }
  //   if (email) {
  //     obj.email = email;
  //   }
  //   const arr = Object.values(obj);

  //   if (arr.length === 0) {
  //     return next(
  //       new ErrorHandler(
  //         400,
  //         'Please enter at least one field that you want to update '
  //       )
  //     );
  //   }
  //   const user = await User.findByIdAndUpdate(req.params.userId, obj).select(
  //     '+password'
  //   );

  res.status(200).json({
    status: 'success',
    data: {
      message,
    },
    message: 'Data has been updated successfully',
  });
});

exports.deleteMessage = AsyncHandler(async function (req, res, next) {
  await Message.findByIdAndDelete(req.param.messageId);
  res.status(204).json({
    status: 'success',
    message: 'User is deleted successfully',
  });
});

// exports.deactivateUser = AsyncHandler(async function (req, res, next) {
//   const user = await User.findById(req.params.userId).select('+password');
//   user.active = false;
//   await user.save({ validateBeforeSave: false });

//   res.status(200).json({
//     status: 'success',
//     message: 'The account has been deactivated sucessfully',
//   });
// });
