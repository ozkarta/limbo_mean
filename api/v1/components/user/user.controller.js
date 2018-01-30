module.exports = function (express) {
	let router = express.Router();
	let UserModel = require('./user.model').model;
	let jwt = require('jsonwebtoken');
	let bcrypt = require('bcryptjs');
	let config = require('../../shared/config/config');

	router.get('/', (req, res) => {
		return res.status(200).json({});
	});

	router.post('/register', (req, res) => {
		console.dir(req.body);
		// TODO  validate response
		// return status if validation fails

		UserModel.findOne({ email: req.body.email }, (err, result) => {
			if (err) {
				// TODO return status message
				return res.status(500).json({});
			}
			if (result) {
				// TODO  return message
				// email is already used
				return res.status(400).json({});
			}

			let user = new UserModel(req.body);
			user.save((err, savedUser) => {
				if (err) {
					// TODO return status message
					return res.status(500).json({});
				}

				let token = jwt.sign({ id: user._id }, config.secret, {
					expiresIn: 86400 // expires in 24 hours
				});
				res.status(200).send({ auth: true, token: token });
			});
		});

	});

	router.put('/', (req, res) => {
		return res.status(200).json({});
	});

	router.delete('/', (req, res) => {
		return res.status(200).json({});
	});

	return router;
};