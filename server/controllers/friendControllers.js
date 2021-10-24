const AsyncHandler = require('../utilities/AsyncHandler.js');
const Friend = require('../models/friendModel.js');

exports.getFriends = AsyncHandler(async function (req, res, next) {
  const friends = await Friend.find();
  res.status(200).json({
    status: 'success',
    results: friends.length,
    data: {
      friends,
    },
  });
});

exports.createFriend = AsyncHandler(async function (req, res, next) {
  const obj = {
    gender: req.body.gender,
    firstName: req.body.firstName,
    text: req.body.text,
  };
  const friend = await Friend.create(obj);
  res.status(201).json({
    status: 'success',
    data: {
      friend,
    },
  });
});

exports.getFriend = AsyncHandler(async function (req, res, next) {
  const friend = await Friend.findById(req.params.friendId);
  res.status(200).json({
    status: 'success',
    data: {
      message,
    },
  });
});

exports.updateFriend = AsyncHandler(async function (req, res, next) {
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
      friend,
    },
    friend: 'Data has been updated successfully',
  });
});

exports.deleteFriend = AsyncHandler(async function (req, res, next) {
  await Friend.findByIdAndDelete(req.param.friendId);
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
