module.exports = function (express) {
	let router = express.Router();
	let UserModel = require('./user.model').model;
	let jwt = require('jsonwebtoken');
	let bcrypt = require('bcryptjs');
	let config = require('../../shared/config/config');
	let MSG = require('../../shared/messages/messages');
	let util = require('../../shared/util/util');
	let validationRules = require('../../shared/validation-rules/validation-rules');

	router.get('/', (req, res) => {
		return res.status(200).json({});
	});

	router.post('/register', (req, res) => {
		// TODO  validate response
		// return status if validation fails

		UserModel.findOne({ email: req.body.email })
			.lean()
			.exec((err, result) => {
				if (err) {
					return util.sendHttpResponseMessage(res, MSG.serverError.internalServerError, err);
				}
				if (result) {
					return util.sendHttpResponseMessage(res, MSG.clientError.badRequest, null, 'User Exists');
				}

				let user = new UserModel(req.body);
				user.passwordHash = bcrypt.hashSync(req.body.password, 8);
				user.save((err, user) => {
					if (err) {
						return util.sendHttpResponseMessage(res, MSG.serverError.internalServerError, err);
					}

					let token = jwt.sign({ id: user._id }, config.secret, {
						expiresIn: 86400 // expires in 24 hours
					});

					delete user['passwordHash'];
					res.status(200).send({ auth: true, token: token , user: user});
				});
			});

	});

	router.post('/sign-in', (req, res) => {

		if (!req.body) {
			return res.status(400).json({});
		}

		UserModel.findOne({email: req.body.email})
			.lean()
			.exec((err, user) => {
				if (err) {
					return util.sendHttpResponseMessage(res, MSG.serverError.internalServerError, err);
				}
				if (!user) {
					return util.sendHttpResponseMessage(res, MSG.clientError.badRequest, null, 'Email was not found');
				}

				let passwordIsValid = bcrypt.compareSync(req.body.password, user.passwordHash);
				if (!passwordIsValid) {
					return util.sendHttpResponseMessage(res, MSG.clientError.badRequest, null, 'Password does not match');
				}

				let token = jwt.sign({ id: user._id }, config.secret, {
					expiresIn: 86400 // expires in 24 hours
				});
				delete user['passwordHash'];
				res.status(200).send({ auth: true, token: token, user: user });
			});

	});

	router.get('/log-out', function(req, res) {
		res.status(200).send({ auth: false, token: null });
	});

	router.put('/', (req, res) => {
		return res.status(200).json({});
	});

	return router;
};