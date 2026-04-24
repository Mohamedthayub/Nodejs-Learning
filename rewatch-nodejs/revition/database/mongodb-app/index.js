
const  express = require('express');
const  db = require('./db');
const  app = express();
const  userRoutes = require('./routes/users')

// this middleware use to parse the incoming request body as JSON data and make it available in the 
// req.body property of the request object.
app.use(express.json());

// Create  User
app.use("/api/users",userRoutes);

app.listen(3000,() => {
    console.log("Server listening to http://localhost:3000");
})