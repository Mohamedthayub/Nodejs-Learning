const express = require('express');
const { model } = require('mongoose');
const router =  express.Router();
const User  = require('../models/User.js');
// create user
router.post('/',async (req,res) => {
    const data  = req.body;
    const user = new User(data);
    const saved = await user.save();
    res.status(201).json(saved);
});
// Get All Users
router.get("/", async (req,res) => {
    const users = await User.find();
    res.status(201).json(users);
});

//Get Single User Using Id;
router.get("/:id", async (req,res) => {
    // console.log(req.params.id);
    const  users = await User.findById(req.params.id);
    res.status(201).json(users);
});

// Update User
router.put("/:id", async (req,res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(user);
});
// Delete 
router.delete("/:id", async (req,res) => {
    await User.findByIdAndDelete(
        req.params.id
    );
    res.sendStatus(204)
});

module.exports = router;