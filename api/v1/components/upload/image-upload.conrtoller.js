module.exports = function (express) {
	let router = express.Router();

	router.post('/', (req, res) => {

		console.log('payload...')
		console.dir(req.payload);
		console.log('Body...');
		console.dir(req.body);
		return res.status(200).json({});
	});

	return router;
};