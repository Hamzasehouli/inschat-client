exports.getAllUsers = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
  return;
};
exports.addUser = async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
  return;
};
