const express = require("express");
const Event = require("../models/events");
const router = express.Router();
const mongodb = require('mongodb');
const morgan = require("morgan");

// Create new event
router.post("/create", async (req, res, next) => {
    console.log(req)
    const event = new Event({
        _id: new mongodb.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        featured_img: req.body.featured_img,
        link: req.body.link,
        location: req.body.location
    });
    console.log("Created event");
    try {
        const savedData = await event.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Find event by id and delete
router.delete("/delete-event/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const event = await Event.findByIdAndDelete(id);
        res.send(`Event ${event.title} has been deleted`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Find event by id and update
router.patch("/updateEvent/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };

        const result = await Event.findByIdAndUpdate(id, updateData, options);
        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get event by id and update
router.get("/getEvent/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const event = await Event.findById(id);
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/test", async (req, res, next) => {
    res.send("connected");
});
module.exports = router;