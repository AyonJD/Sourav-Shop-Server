const UserModel = require('../Models/UserModel.js');
const jwt = require('jsonwebtoken');

module.exports.createUser = async (req, res) => {
    const { email, password, userName, role } = await req.body;

    const newUser = new UserModel({
        userName,
        email,
        password,
        role
    });

    try {
        const accessToken = jwt.sign(req.body, process.env.TOKEN, { expiresIn: "1d" });
        const result = await newUser.save();
        const { userName, email } = result;
        res.status(200).json({ success: true, message: "Successfully created user", token: accessToken, result: { userName, email, role } });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}

module.exports.getUser = async (req, res) => {
    try {
        const result = await UserModel.find();
        res.status(200).json({ success: true, message: "Successfully fetched all users", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}

module.exports.loginUser = async (req, res) => {
    const { email, password, userName } = await req.body;
    try {
        const user = await UserModel.findOne({ $or: [{ userName }, { email }] });
        const user_exclude_pass = await UserModel.findOne({ $or: [{ userName }, { email }] }, { password: 0 });
        // const id = user._id.toString().split('"')[0];

        if (user) {
            if (user.password === password) {
                const accessToken = jwt.sign(req.body, process.env.TOKEN, { expiresIn: "1d" });
                res.status(200).json({ success: true, message: "Login successfully", token: accessToken, result: { user: user_exclude_pass } });
            } else {
                res.status(401).json({ success: false, message: "Invalid password" });
            }
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}