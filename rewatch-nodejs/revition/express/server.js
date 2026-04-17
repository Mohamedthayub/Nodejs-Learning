const express = require('express');
const app = express();


app.use((req,res,next) => {
    next(); 
});
// here it is middleware .it will decide what should do for every request;

app.get('/',(req,res) => {
    res.status(200).send("Hello Express App");
})

app.post("/",(req,res) => {
    res.status(201).send("This is a Post request from express");
})

app.use((req,res,next) => {
    res.status(404).send("Bad Request");
})

app.listen(3000,() => {
    console.log("Server listening to http://localhost:3000");
})
// here the express app is running port number 3000;