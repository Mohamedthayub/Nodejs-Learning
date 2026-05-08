const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        const con = await mongoose.connect(process.env.DB_URL);
        console.log(`MongoDB connected to host: ${con.connection.host}`);
    } catch (error) {
        console.log("DB connection error:", error.message);
    }
};

module.exports = connectDatabase;