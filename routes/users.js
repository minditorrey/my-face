var express = require('express');
var router = express.Router();

var User = require('../models/user');


//Do Crud Things:

router.route('/')
	.get((req, res) => {
		User.find({}, (err, users) => {
			res.status(err ?400 : 200).send(err || users);
		})
	})
	.post((req, res) => {
		User.register(req.body, err => {
			res.status(err ? 400 : 200).send(err);
		});
	});

router.post('/authenticate', (req, res) => {
	User.authenticate(rq.body, (err, token) => {
		if(err) return res.status(400).send(err);

		res.cookie('accessToken', token).send();
	});
});

router.get('/profile', User.isLoggedIn, (req, res) => {
	res.send(req.user);
})

router.delete('/logout', (req, res) => {
	res.clearCookie('accessToken').send();
});

router.put('/login', (req, res) => {
	User.
})




module.exports = router;