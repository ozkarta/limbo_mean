module.exports = function (express) {
	let router = express.Router();
	let multer  = require('multer');
	let sharedFolderName = 'data'
	imageUploadPath = '/uploads/images'
	let upload = multer({ dest: `${sharedFolderName}${imageUploadPath}` });

	router.post('/', upload.single('file'), (req, res) => {

		let file = {};
		if (req.file) {
			file.publicPath = `${req.file.destination.replace(sharedFolderName, '')}/${req.file.filename}`;
		}
		return res.status(200).json(file);
	});

	return router;
};