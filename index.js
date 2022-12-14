const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const UserRoute = require('./Routes/UserRoute.js');
const ServiceRoute = require('./Routes/ServiceRoute.js');
const PaymentRoute = require('./Routes/PaymentRoute.js');
const NumberRoute = require('./Routes/NumberRoute.js');
const NotificationRoute = require('./Routes/NotificationRoute.js');

const PORT = process.env.PORT || 5000;
const app = express();

const corsFonfig = {
    origin: true,
    credentials: true,
}

app.use(cors(corsFonfig));
app.options('*', cors(corsFonfig));
app.use(bodyParser.json());

//Database connection
mongoose.connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Routes
app.get("/", (req, res) => {
    res.send("Server is running");
})
app.use('/api/v1/auth/user', UserRoute);
app.use('/api/v1/auth/service', ServiceRoute);
app.use('/api/v1/auth/payment', PaymentRoute);
app.use('/api/v1/auth/number', NumberRoute);
app.use('/api/v1/auth/notification', NotificationRoute);

//All
app.all("*", (req, res) => {
    res.status(404).json({ message: "Route not found" });
})

process.on('uncaughtException', err => {
    console.log(err);
    app.close(() => {
        process.exit(1);
    })
})