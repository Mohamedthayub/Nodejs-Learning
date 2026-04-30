const express = require('express');
const app = express();


app.use("/",(req,res,next) => {
    next();
}) // this is middleware it will run before all the routes;


app.get('/',(req,res) => {
    res.status(200).send("Hey This is  Get Method");
});

app.post('/',(req,res) => {
    res.status(200).send("Hey This is Post Method");
});

app.put("/",(req,res) => {
    res.status(200).send("Hey This is Put Method");
});

app.patch('/',(req,res) => {
    res.status(200).send("Hey This is Patch Method");
});

app.delete("/",(req,res) => {
    res.status(200).send("Hey This is Delete Method");
});

app.use((req,res) => {
    res.status(404).send("Page Not Found");
});

app.listen(3000,() => {
    console.log("http://localhost:3000");
})