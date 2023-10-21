const express = require("express");
const Event = require("../models/events");
const router = express.Router();
const Event = require('../models/events');

router.post("/create", async (req, res, next) {
    const event = new Event({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        featured_img: req.body.featured_img,
        link: req.body.link
    })

    try {
        const savedData = await event.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});

router.delete("/delete-event/:id", async (req, res, next) {
    try {
        const id = req.params.id
        const event = Event.findByIdAndDelete(id);
        res.send("Event `${event.name}` has been deleted");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.patch("/update", async (req, res, next) {
    
});
router.get("/get-event-by-id", async (req, res, next) {
    try {
        const id = req.params.id
        const event = Event.findById(id);
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.export = router;