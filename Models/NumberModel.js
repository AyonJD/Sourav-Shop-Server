const mongoose = require('mongoose');

const NumberSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        default: "Bkash",
        enum: ["Bkash", "Rocket", "Nagad"]
    },
}, { timestamps: true });

const NumberModel = mongoose.model('Number', NumberSchema);

module.exports = NumberModel;