module.exports = function(express) {
	let router = express.Router();
	let MSG = require('../../shared/messages/messages');

	// Send 502 if no route is found
	router.get('/', (req, res) => {
		return res.status(MSG.serverError.badGateway.code).json(MSG.serverError.badGateway);
	});

	router.post('/', (req, res) => {
		return res.status(MSG.serverError.badGateway.code).json(MSG.serverError.badGateway);
	});

	router.delete('/', (req, res) => {
		return res.status(MSG.serverError.badGateway.code).json(MSG.serverError.badGateway);
	});

	router.put('/', (req, res) => {
		return res.status(MSG.serverError.badGateway.code).json(MSG.serverError.badGateway);
	});

	return router;
}