const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
	},
	phone: {
		type: String,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	photo: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model('admin', adminSchema);
