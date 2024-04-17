const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formDataSchema = new Schema({
    name: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
