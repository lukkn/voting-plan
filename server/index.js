const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    dbName: "voting-plan",
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose connection is disconnected due to application termination');
        process.exit(0);
    });
});

const Badges = mongoose.model("badges", {});
app.get('/badges', async (req, res) => {
    const badges = await Badges.find().lean(); // find all products
    res.json(badges);
});

const User = require("./Models/UserModel")
app.post("/complete-mission", async (req, res) => {
    const filter = { email: req.body.email };
    const update = { stage: req.body.stage + 1, level: req.body.level + 1, experience: req.body.experience + 50};

    const user = await User.findOneAndUpdate(filter, update, {
        new: true,
    });
    res.json(user);
});

const Mission = mongoose.model("missions", {});
app.post("/mission", async (req, res) => {
    const mission = await Mission.findOne({ stage: req.body.stage });
    res.json(mission);
});
