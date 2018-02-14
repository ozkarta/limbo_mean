module.exports = function (express) {
	let router = express.Router();

	let EnumObject = {
		currency: require('../../shared/enums/currency.enum').CurrencyEnum,
		jobCondition: require('../../shared/enums/job-condition.enum').JobConditionEnum,
		jobStatus: require('../../shared/enums/job-status.enum').JobStatusEnum
	};

	router.post('/', (req, res) => {
		let responseEnums = {};

		if (req.body && req.body.enums) {
			req.body.enums.forEach(en => {
				responseEnums[en] = EnumObject[en];
			});
		}

		res.status(200).json(responseEnums);
	});

	return router;
};