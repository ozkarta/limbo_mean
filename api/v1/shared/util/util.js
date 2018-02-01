let MSG = require('../messages/messages');

exports.validateRequestBody = (res, target, rules) => {
	// TODO send response message with error of rule validation fails and return false;
	let errorObject = {};
	Object.keys(rules).forEach(field => {
		if (rules[field]) {
			Object.keys(rules[field]).forEach(validation => {

				switch(validation) {
					case 'required':
						if (rules[field][validation]) {
							validateRequired(field);
						}

					case 'minLength':
						validateMinLength();

					case 'maxLength':
						validateMaxLength();

					case 'pattern':
						validatePattern();

					case 'date':
						validateDate();

					case 'number':
						validateNumber();

				}
			})
		}

	});

	function validateRequired(field) {
		if (!target[field]) {
			if (!errorObject[field]) {
				errorObject[field] = {};
			}

			errorObject[field]['required'] = `${field} is required.`;
		}
	}

	function validateMinLength() {

	}

	function validateMaxLength() {

	}

	function validatePattern() {

	}

	function validateDate() {

	}

	function validateNumber() {

	}

	if (Object.keys(errorObject).length > 0) {
		this.sendHttpResponseMessage(res, MSG.clientError.badRequest, {validation: errorObject}, 'Validation Error');
		return false;
	}

	// Return true if everything is ok
	return true;
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



