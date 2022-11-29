const ServiceModel = require('../Models/ServiceModel');

module.exports.getService = async (req, res) => {
    try {
        const result = await ServiceModel.find();
        res.status(200).json({ success: true, message: "Successfully fetched all services", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}

module.exports.createService = async (req, res) => {
    const { title, serverName, time, image, package, term, popupData } = await req.body;

    const newService = new ServiceModel({
        title,
        serverName,
        time,
        image,
        package,
        term,
        popupData
    });

    try {
        const result = await newService.save();
        res.status(200).json({ success: true, message: "Successfully created service", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}

module.exports.updateService = async (req, res) => {
    const id = req.params.id;
    const { title, serverName, time, image, package, term, popupData } = await req.body;

    try {
        const result = await ServiceModel.findByIdAndUpdate(id, {
            title,
            serverName,
            time,
            image,
            package,
            term,
            popupData
        }, { new: true });
        res.status(200).json({ success: true, message: "Successfully updated service", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}

module.exports.deleteService = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await ServiceModel.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfully deleted service", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}

module.exports.getSingleService = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await ServiceModel.findOne({ _id: id });
        res.status(200).json({ success: true, message: "Successfully fetched single service", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}