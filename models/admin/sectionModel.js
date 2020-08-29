const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model('section', sectionSchema);
