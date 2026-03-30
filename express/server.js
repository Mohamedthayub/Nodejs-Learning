const express = require("express");

const app = express();


app.get("/",(req,res) => {
    res.send("Hello from express ");
});

app.get("/about",(req,res) => {
    res.send("ABout Page");
});

app.get("/contact",(req,res) => {
    res.send("Contact Page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
