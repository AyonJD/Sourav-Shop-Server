const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    user: {
        type: Object,
        required: true
    },
    service: {
        type: Object,
        required: true
    },
    gameInfo: {
        type: Object,
        required: true
    },
    pack: {
        type: Object,
        required: true
    },
    invoiceId: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        default: "Bkash",
        enum: ["Bkash", "Rocket", "Nagad"]
    },
    paymentStatus: {
        type: String,
        default: "Pending",
        enum: ["Pending", "Not Paied", "Success", "Failed"]
    },
    paymentDate: {
        type: String,
        required: true
    },
    paymentTime: {
        type: String,
        required: true
    },
    paymentAmount: {
        type: Number,
        required: true
    },
    paymentNumber: {
        type: String,
        required: true
    },
    paymentTrxNumber: {
        type: String,
        required: true
    },
    confirmStatus: {
        type: String,
        default: "Pending",
        enum: ["Pending", "Success", "Failed"]
    }
}, { timestamps: true });

const PaymentModel = mongoose.model("Payment", PaymentSchema);
module.exports = PaymentModel;
