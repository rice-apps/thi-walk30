const express = require('express');
const router = express.Router();
const Stat = require('../models/stat');

router.post('/create', async (req, res) => {
    console.log("Attempting to create a new stat...")
    try {
        const { type, userId, eventId, ...rest } = req.body;
        const newStat = new Stat({
            type,
            userId,
            eventId,
            data: rest, // rest contains all other fields besides type
        });

        newStat.markModified('data');

        const savedStat = await newStat.save();
        res.status(201).json(savedStat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/recent', async (req, res) => {
    try {
        const stats = await Stat.find();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific stat by ID
router.get('/:id', async (req, res) => {
    try {
        const stat = await Stat.findById(req.params.id);
        if (!stat) {
            return res.status(404).json({ message: 'Stat not found' });
        }
        res.json(stat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get stats by user ID
router.get('/user/:userId', async (req, res) => {
    try {
        const stats = await Stat.find({ userId: req.params.userId });
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get stats by event ID
router.get('/event/:eventId', async (req, res) => {
    try {
        const stats = await Stat.find({ eventId: req.params.eventId });
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const stat = await Stat.findByIdAndDelete(req.params.id);
        if (!stat) {
            return res.status(404).json({ message: 'Stat not found' });
        }
        res.json({ message: 'Stat deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;