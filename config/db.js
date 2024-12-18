const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try{
        await mongoose.connect( process.env.MONGODB_URI);
        console.log("Connected to MongoDB Atlas");
    } catch (e) {
        console.error("Could not connect to MongoDB: ", e);
        process.exit(1); //exit the backend app process
    }
}

module.exports = connectToDatabase;