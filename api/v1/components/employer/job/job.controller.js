module.exports = function (express) {
	let router = express.Router();
	let JobModel = require('../../../shared/models/job-model').model;

	router.get('/', (req, res) => {
		return res.status(200).json({});
	});

	return router;
};