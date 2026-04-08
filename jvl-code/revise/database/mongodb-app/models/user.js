const mongoose = require('mongoose');

const  userSchema = new mongoose.Schema({
    name : String,
    email : String
}); 
// this is a schema  with this we create a data model 
module.exports = mongoose.model("user",userSchema);

