let mongoose = require('mongoose');

let jobProposalSchema = new mongoose.Schema({

}, {
	timestamps: true
});

let jobProposalModel = mongoose.model('JobProposal', jobProposalSchema);

exports.model = jobProposalModel;
exports.schema = jobProposalSchema;