const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    serverName: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    package: {
        type: Array,
        required: true
    },
    term: {
        type: String,
        required: true
    },
    popupData: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ServiceModel = mongoose.model("Service", ServiceSchema);
module.exports = ServiceModel;
