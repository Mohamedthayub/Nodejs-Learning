const express = require('express');
const app = express();


app.use("/",(req,res,next) => {
    next();
})

app.get('/',(req,res) => {
    res.status(200).send("Hey This is Get Request");
})

app.post('/',(req,res) => {
    res.status(200).send("Hey This is Post Request");
})

app.put("/",(req,res) => {
    res.status(200).send("Hey This is Put Request");
})

app.use("/",(req,res) => {
    res.status(404).send("Hey This URL is Not Found");
})

app.listen(3000,() => {
    console.log("The servers is Running is http://localhost:3000");
})