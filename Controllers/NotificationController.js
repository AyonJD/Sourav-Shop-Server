const NotificationModel = require('../Models/NotificationModel');

module.exports.getNotification = async (req, res) => {
    try {
        const notification = await NotificationModel.find();
        res.status(200).json({ success: true, message: "Successfully fetched all notifications", result: notification });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
}

module.exports.createNotification = async (req, res) => {
    const notification = new NotificationModel(req.body);
    try {
        const newNotification = await notification.save();
        res.status(200).json({ success: true, message: "Successfully created notification", result: newNotification });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
}
