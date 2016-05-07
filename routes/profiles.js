var express = require('express');
var router = express.Router();

var Profile = require('../models/profile');


//Do Crud Things:

router.route('/')
	.get((req, res) => {
		Profile.find({}, (err, profiles) => {
			res.status(err ? 400 : 200).send(err || profiles);
		});
	})






module.exports = router;