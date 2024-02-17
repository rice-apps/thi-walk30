const express = require('express');

const Announcement = require('../models/announcement');
const Organization = require("../models/organization");

const router = express.Router();

router.use("/announcement", Announcement);

module.exports = router;

// Create an annnouncement
router.post('/create', async (req, res) => {
    const data = new Announcement({
        organization: req.body.organization,
        title: req.body.title,
        description: req.body.description,
        links: req.body.links,
        featuredImage: req.body.featuredImage
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

// Update announcement
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateAnnouncement = req.body;
        const options = { new: true };

        const result = await Announcement.findByIdAndUpdate(
            id, updateAnnouncement, options
        );
        if (!result) res.send("No such announcement to update");
        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
});

// Delete announcement
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Announcement.findbyIdAndDelete(id);
        // if it doesn't exist ?
        res.send(`Announcement '${req.params.title} has been deleted`)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
});

// Search announcement by organization
router.get('/search-by-org/:id', async (req, res) => {
    try {
        const org_id = req.params.id;
        const results = await Announcement.find({ 'organization': org_id });
        res.json(results)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})