let MSG = require('../messages/messages');

exports.validate = (target, rules) => {

};

exports.sendHttpResponseMessage = (res, message, error, msg) => {
	if (error) {
		message.error = error;
	}
	if (msg) {
		message.msg = msg;
	}

	return res.status(message.code).json(message);
};



