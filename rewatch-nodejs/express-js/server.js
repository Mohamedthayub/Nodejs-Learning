const express = require('express');

const app = express();

app.use((req,res,next) => {
    // console.log("Request URL",req.url);
    next();
});
app.get("/", (req,res) => {
    res.status(200).send("Hello Express App");
})

app.post("/",(req,res) => {
    res.status(200).send("Hello. This  is Post Request");
});

app.use((req,res,next) => {
    res.status(404).send("404 Page Not Found");
});

app.listen(3000,() => {
    console.log("server listening port 3000");
});