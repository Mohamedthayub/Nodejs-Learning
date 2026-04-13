const express = require('express');
require('./db');

const app = express();
// here we export the user model
const User = require('./models/user');
// this function get the json data convert and send to the post request;
app.use(express.json());
// here we are going to create the user routes;
app.post("/api/users", async (req,res) => {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);   
})
// here we are going to create get user route/

app.listen(3000,() => {
    console.log("Server listening to http://localhost:3000");
})