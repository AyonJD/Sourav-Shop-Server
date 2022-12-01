const PaymentModel = require('../Models/PaymentModel');

module.exports.getPayment = async (req, res) => {
    try {
        const result = await PaymentModel.find();
        res.status(200).json({ success: true, message: "Successfully fetched all payments", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}

module.exports.createPayment = async (req, res) => {
    const { user, gameInfo, service, pack, invoiceId, paymentMethod, paymentStatus, paymentDate, paymentTime, paymentAmount, paymentNumber, paymentTrxNumber, confirmStatus } = await req.body;

    const newPayment = new PaymentModel({
        user,
        gameInfo,
        service,
        pack,
        invoiceId,
        paymentMethod,
        paymentStatus,
        paymentDate,
        paymentTime,
        paymentAmount,
        paymentNumber,
        paymentTrxNumber,
        confirmStatus
    });

    try {
        const result = await newPayment.save();
        res.status(200).json({ success: true, message: "Successfully created payment", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}

module.exports.updatePayment = async (req, res) => {
    const id = req.params.id;
    const { user, service, pack, invoiceId, paymentMethod, paymentStatus, paymentDate, paymentTime, paymentAmount, paymentNumber, paymentTrxNumber, confirmStatus } = await req.body;

    try {
        const result = await PaymentModel.findByIdAndUpdate(id, {
            user,
            service,
            pack,
            invoiceId,
            paymentMethod,
            paymentStatus,
            paymentDate,
            paymentTime,
            paymentAmount,
            paymentNumber,
            paymentTrxNumber,
            confirmStatus
        }, { new: true });
        res.status(200).json({ success: true, message: "Successfully updated payment", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}

module.exports.getSinglePayment = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await PaymentModel.findById({ _id: id });
        res.status(200).json({ success: true, message: "Successfully fetched single payment", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}