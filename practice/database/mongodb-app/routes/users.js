const express = require('express');
const router = express.Router();
const  User = require('../models/User.js');

// get All users

router.get("/",async (req,res) => {
    const users = await User.find();
    res.status(201).json(users);
});

// save the user 
router.post("/",async (req,res) => {
    const data = req.body; // we get the user data in body
    const user = new User(data);
    const saved = await user.save(); // it saves the data in database;
    res.status(201).json(saved); // it send the saved data with id;
});

// get Single User by Id;

router.get("/:id" , async (req,res) => {
    // console.log(req.params.id);
    const users =  await User.findById(req.params.id);
    res.status(201).json(users);
})


// update the user by Id ;

router.put("/:id",async  (req,res) => {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(user);
});
// delete the user by Id
router.delete("/:id" ,async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
})

module.exports = router;