const express = require('express');
require('./db');

const app = express();
// here we export the user model
const user = require('./models/user');
// this function get the json data convert and send to the post request;
app.use(express.json());
// here we are going to create the user routes;
app.post("/api/users",(req,res) => {
   const data =  req.body;
   console.log(data);
})


app.listen(3000,() => {
    console.log("Server listening to http://localhost:3000");
})