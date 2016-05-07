'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});





userSchema.methods.makeToken = function() {
	var token = jwt.sign({ _id: this._id }, JWT_SECRET);
	return token;
};

userSchema.statics.isLoggedIn = function(req, res, next) {
	
	var token = req.cookies.accessToken;

	jwt.verify(token, JWT_SECRET, (err, payload) => {
		if(err) return res.status(401).send({error: 'Must be authenticated.'});
		
		User
		.findById(payload._id)
		.select('-password')
		.exec((err, user) => {
			if(err || !user) {
				return res.clearCookie('accessToken').status(400).send(err || {error: 'User is not found'});
			}
		req.user = user;
		next();
		})
	});

};

userSchema.statics.register = function(userObj, cb) {
	User.create(userObj, cb);
};

userSchema.statics.authenticate = function(userObj, cb) {
	this.findOne({username: userObj.username}, (err, dbUser) => {
		if(err || !dbUser) return cb(err || { error: "Login failed. Credentials invalid."});
	
		if(dbUser.password !== userObj.password) {
			return cb({error: "Login failed. Credentials invalid."});
		}
		var token = dbUser.makeToken();
		cb(null, token);
	});
};




var User = mongoose.model('User', userSchema);

module.exports = User;