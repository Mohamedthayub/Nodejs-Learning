const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userdb2')
.then(() => {
    console.log("Database Connected");
})
.catch((err) => {
    console.log("Database Connection Failed",err);
})