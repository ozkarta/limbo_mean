let mongoose = require('mongoose');
let mongoosastic = require('mongoosastic');

let jobSchema = new mongoose.Schema({

}, {
	timestamps: true
});

let jobModel = mongoose.model('Job', jobSchema);

exports.model = jobModel;
exports.schema = jobSchema;