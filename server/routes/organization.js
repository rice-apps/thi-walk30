const express = require("express");
const router = express.Router();
const Organization = require("../models/organization");
const mongodb = require("mongodb");

router.post("/create", async (req, res, next) => {
    const org = new Organization({
        _id: new mongodb.ObjectId(),    
        name: req.body.name,
        img: req.body.img 
    });
    try {
        const savedData = await org.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.patch("/:id", async (req, res, next) => {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true }
    try {
        const result = await Organization.findByIdAndUpdate(id, updateData, options);
        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.delete("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Organization.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = router;