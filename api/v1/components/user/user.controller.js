module.exports = function (express) {
	let router = express.Router();
	let UserModel = require('./user.model');
	let jwt = require('jsonwebtoken');
	let bcrypt = require('bcryptjs');
	let config = require('../../shared/config/config');

	router.get('/', (req, res) => {
		return res.status(200).json({});
	});

	router.post('/register', (req, res) => {
		console.dir(req.body);
		return res.status(200).json({});
	});

	router.put('/', (req, res) => {
		return res.status(200).json({});
	});

	router.delete('/', (req, res) => {
		return res.status(200).json({});
	});

	return router;
};