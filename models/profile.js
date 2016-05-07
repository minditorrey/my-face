'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  education: { type: String, required: true },
  biography: { type: String, required: true }
});






var Profile = mongoose.model('Profile', userSchema);

module.exports = Profile;