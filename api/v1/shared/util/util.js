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
						validateMinLength(field, rules[field][validation]);

					case 'maxLength':
						validateMaxLength(field, rules[field][validation]);

					case 'pattern':
						validatePattern(field, rules[field][validation]);

					case 'date':
						if (rules[field][validation]) {
							validateDate(field);
						}

					case 'number':
						if (rules[field][validation]) {
							validateNumber(field);
						}

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

	function validateMinLength(field, value) {
		if (!field || !value) {
			return;
		}

		if (target[field]) {
			if (target[field].length < value) {
				if (!errorObject[field]) {
					errorObject[field] = {};
				}

				errorObject[field]['minLength'] = `Min Length of ${field} must be ${value}.`;
			}
		}
	}

	function validateMaxLength(field, value) {
		if (!field || !value) {
			return;
		}

		if (target[field]) {
			if (target[field].length > value) {
				if (!errorObject[field]) {
					errorObject[field] = {};
				}

				errorObject[field]['maxLength'] = `Max Length of ${field} must be ${value}.`;
			}
		}
	}

	function validatePattern(field, value) {
		if (!target[field]) {
			return;
		}
		let regExp = new RegExp(value);
		if (!regExp.test(target[field])) {
			if (!errorObject[field]) {
				errorObject[field] = {};
			}

			errorObject[field]['pattern'] = `${field} must match to Pattern: \'${value}\'.`;
		}
	}

	function validateDate(field) {
		// TODO date validation needs to be fixed
		if (!field) {
			return;
		}

		if (target[field]) {
			let date = new Date(target[field]);
			if ( isNaN( date.getTime() ) ) {
					if (!errorObject[field]) {
						errorObject[field] = {};
					}

					errorObject[field]['date'] = `${field} must be in Date format.`;
			}
		}
	}

	function validateNumber(field) {
		if (!field) {
			return;
		}

		if (target[field]) {
			if ( isNaN( Number(target[field]) ) ) {
				if (!errorObject[field]) {
					errorObject[field] = {};
				}

				errorObject[field]['number'] = `${field} must be in Number.`;
			}
		}
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



