const express = require('express');

const Announcement = require('../models/announcement');
const Organization = require("../models/organization");

const router = express.Router();

router.use("/announcement", Announcement);

module.exports = router;

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

