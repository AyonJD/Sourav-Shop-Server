const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    details: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const NotificationModel = mongoose.model("Notification", NotificationSchema);
module.exports = NotificationModel;