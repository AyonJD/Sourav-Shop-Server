const NumberModel = require('../Models/NumberModel.js');

module.exports.createNumber = async (req, res) => {
    const { number, provider } = await req.body;
    const newNumber = new NumberModel({
        number,
        provider
    });
    try {
        const result = await newNumber.save();
        res.status(200).json({ success: true, message: "Successfully created number", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
};

module.exports.getNumber = async (req, res) => {
    try {
        const result = await NumberModel.find();
        res.status(200).json({ success: true, message: "Successfully fetched all numbers", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
};

module.exports.updateNumber = async (req, res) => {
    const { id } = await req.params;
    const { number } = await req.body;
    try {
        const result = await NumberModel.findByIdAndUpdate(id, { number }, { new: true });
        res.status(200).json({ success: true, message: "Successfully updated number", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
};
