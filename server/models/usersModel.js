const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  profilImage: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'please select your gender'],
  },
  username: {
    type: String,
    required: [true, 'name is required'],
    // validate: {
    //   validator(val) {
    //     return val.length < 3 && val.length > 20;
    //   },
    // },
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    // validate: {
    //   validator(val) {
    //     return val.includes('@') && val.split('@')[1].includes('.');
    //   },
    // },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  confirmPassword: {
    type: String,
    required: true,
    // validate: {
    //   validator(val) {
    //     return this.password === val;
    //   },
    // },
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 12);
  console.log(this.password);
  this.confirmPassword = undefined;
});

userSchema.methods.verifyPassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
