const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formDataSchema = new Schema({
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
    },
    phone: {
        type: Number,
        required: false, 
    },
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
