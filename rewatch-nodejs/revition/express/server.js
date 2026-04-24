// const express = require('express');
// const app = express();
// // console.log(app

// app.use((req,res,next) => {
//     next();
// })

// app.get("/",(req,res) => {
//     res.status(200).send("Hello This is Get Request");
// })

// app.post('/',(req,res) => {
//     res.status(200).send("Hello This is Post Request App")
// });

// app.use((req,res,next) => {
//     res.status(404).send("The Page is Not Found");
// })

// app.listen(3000,() => {
//     console.log("Server listening http://localhost:3000")
// })

// // here the express app is running port number 3000;





const express = require('express');
const  app = express();

app.use("/",(req,res,next) => {
    console.log(req.url);
})

app.get("/",(req,res) => {
    res.status(200).send("Hello This is  Get Method...");
})

app.post("/",(req,res) => {
    res.status(200).send("Hello This is Post Method..");
})

app.put("/",(req,res) => {
    res.status(200).send("Hello This is Put Method..");
})

app.use((req,res) => {
    res.status(404).send("The Page is Not  Found");
})

app.listen(2000,() => {
    console.log('the server is running http://localhost:2000');
})