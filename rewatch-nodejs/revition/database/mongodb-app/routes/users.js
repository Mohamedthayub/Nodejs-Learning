// Create  User
const  express = require('express');
const router = express.Router();
const User = require("../models/User")


router.post("/",async (req,res) => {
    const  user =  new User(req.body);
    const  savedUser = await user.save();
    res.status(201).json(savedUser);
});

// get  all users  -GET /api/users;
router.get("/",async(req,res) => {
    const users = await User.find();
    res.status(200).json(users);
});


// get single user  By Id  -GET /api/users;
router.get("/:id",async(req,res) => {
    const users = await User.findById(req.params.id);
    res.status(201). json(users);
}); 


router.put("/:id",async(req,res) => {
    const user = await  User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(user);
});


router.delete("/:id",async(req,res) => {
    await  User.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

module.exports = router;