let mongoose = require('mongoose');
let JobStatusEnum = require('../../shared/enums/job-status.enum').JobStatusEnum;
let JobConditionEnum = require('../../shared/enums/job-condition.enum').JobConditionEnum;
let CurrencyEnum = require('../../shared/enums/currency.enum').CurrencyEnum;

let jobSchema = new mongoose.Schema({
	owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	title: {type: String, trim: true, required: true},
	description: {type: String, trim: true, required: true},
	tags: [{type: String, trim: true}],
	deadLine: {type: Date},
	budget: {
		qty: {type: Number},
		currency: {type: String, enum: CurrencyEnum}
	},
	attachments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Media'}],

	visitors: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	proposals: [{type: mongoose.Schema.Types.ObjectId, ref: 'JobProposal'}],
	status: {type: String, enum: JobStatusEnum},
	condition: {type: String, enum: JobConditionEnum}				// active ,finished , inProgress, cancelled,
}, {
	timestamps: true
});

let jobModel = mongoose.model('Job', jobSchema);

exports.model = jobModel;
exports.schema = jobSchema;