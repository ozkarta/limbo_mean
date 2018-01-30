let mongoose = require('mongoose');
let mongoosastic = require('mongoosastic');

let userSchema = new mongoose.Schema({
	firstName: {type: String, trim: true},
	lastName: {type: String, trim: true},
	email: {type: String, trim: true},
	passwordHash: {type: String},
	role: {type: String, enum: ['employee', 'employer', 'admin', 'owner', 'developer']},
	isIndividual: {type: Boolean},
	isCompany: {type: Boolean},
	// Company Details
	businessName: {type: String, trim: true},
	businessType: {type: String, trim: true},
	controlNumber: {type: String, trim: true},
	principalOfficeAddress: {type: String, trim: true},
	registrationDate: {type: Date, default: Date.now}     // LTD Registration, Not user Registration
	//_______________________________________________


}, {
	timestamps: true
});

let userModel = mongoose.model('User', userSchema);

exports.model = userModel;
exports.schema = userSchema;