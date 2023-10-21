const express = require("express");
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
router.delete("/delete", async (req, res, next) {

});
router.patch("/update", async (req, res, next) {

});
router.get("/get-event-by-id", async (req, res, next) {

});

module.export = router;