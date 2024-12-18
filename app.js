const express = require("express");
const morgan = require("morgan");
require('dotenv').config();
const connectToDatabase = require('./config/db.js')
const taskRoutes = require('./routes/tasks');
const authRoutes = require('./routes/authentication');

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Tasks Rest API");
});

app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

app.use((req, res) => {
    res.status(404).status(404).send('404 Not Found');
});

const startServer = async() => {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};
startServer();


