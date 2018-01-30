let mongoose = require('mongoose');
let mongoosastic = require('mongoosastic');

let userSchema = new mongoose.Schema({

}, {
	timestamps: true
});

let userModel = mongoose.model('User', userSchema);

exports.model = userModel;
exports.schema = userSchema;