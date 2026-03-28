const express  = require('express'); // here we import  express module
const app = express(); //  here we call the express module


app.get("/",(req,res) => {
    res.status(200).send("Hello Express App");
}); // get() function is used to get the request from the server


app.post("/",(req,res) => {
    res.status(200).send("Hello Express App! This is Post Method..");
}); // post() function is used to store the data in the server;


app.listen(5000,() => {
    console.log("Server listening on Port 5000");
}) // here we create a server in 5000 port  