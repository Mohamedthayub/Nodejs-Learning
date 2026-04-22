const express = require('express');
const app = express();
// console.log(app

app.use((req,res,next) => {
    next();
})

app.get("/",(req,res) => {
    res.status(200).send("Hello This is Get Request");
})

app.post('/',(req,res) => {
    res.status(200).send("Hello This is Post Request App")
});

app.use((req,res,next) => {
    res.status(404).send("The Page is Not Found");
})

app.listen(3000,() => {
    console.log("Server listening http://localhost:3000")
})

// here the express app is running port number 3000;