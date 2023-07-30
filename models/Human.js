const mongoose = require('mongoose');

const HumanSchema = new mongoose.Schema({
name : { type:  String, description: "Required Field", required: true },
mobileNo : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('Human', HumanSchema);