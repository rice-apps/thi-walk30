const express = require('express')

const DailyActivity = require('../models/dailyActivity')

const router = express.Router()

router.post('/create', async (req,res)=> {
    const data = new DailyActivity({
        step: req.body.step,
        miles: req.body.miles,
        workoutTime: req.body.workoutTime,
        date: req.body.date,
    });

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
});

module.exports = router;