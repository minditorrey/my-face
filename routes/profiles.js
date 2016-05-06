var express = require('express');
var router = express.Router();

var House = require('../models/profiles');


//Do Crud Things:

router.route('/')
	.get((req, res) => {
		User.find({}, (err, users) => {
			res.status(err ? 400 : 200).send(err || users);
		});
	})






module.exports = router;