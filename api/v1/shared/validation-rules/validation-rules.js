module.exports.userRegistrationRules = {
	firstName: {
		required: true,
		minLength: 5,
		maxLength: 1,
		pattern: '^([a-z0-9]{5,})$',
		date: true,
		number: true,
	},
	lastName: {

	},
	email: {

	},
	passwordHash: {

	},
	role: {

	},
	isIndividual: {

	},
	isCompany: {

	},
	businessName: {

	},
	businessType: {

	},
	controlNumber: {

	},
	principalOfficeAddress: {

	},
	registrationDate: {

	}
}