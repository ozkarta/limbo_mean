module.exports = function (express) {
	let router = express.Router();
	let UserModel = require('./user.model');

	router.get('/', (req, res) => {
		return res.status(200).json({});
	});

	router.post('/', (req, res) => {
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