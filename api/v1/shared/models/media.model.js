let mongoose = require('mongoose');

let mediaSchema = new mongoose.Schema({

}, {
	timestamps: true
});

let mediaModel = mongoose.model('Media', MediaSchema);

exports.model = mediaModel;
exports.schema = mediaSchema;