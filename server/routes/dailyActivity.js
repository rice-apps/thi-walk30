const express = require('express')

const DailyActivity = require('../models/dailyActivity')
const User = require('../models/user')

const router = express.Router()

router.post('/create/:id', async (req,res)=> {
    const data = new DailyActivity({
        step: req.body.step,
        miles: req.body.miles,
        workoutTime: req.body.workoutTime,
        date: Date.parse(req.body.date),
        userID: req.params.id
    });

    try{
        const user = await User.findById(req.params.id);
        if (user.dailyActivities === undefined) {
            user.dailyActivities = [];
        }
        user.dailyActivities.push(data._id);
        await user.save();

        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
});

router.get('/getActivitiesForDay/:id'), async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const result = user.dailyActivities.filter(async (dailyActivityID) => {
            activity = await DailyActivity.findById(dailyActivityID)
            target_date = new Date(req.params.date)
            console.log(target_date)
            activity_date = new Date(activity.date.getTime()).setHours(0,0,0,0)
            if (target_date == activity_date) {
                console.log(activity_date)
            }
            return (target_date == activity_date)
        })
        console.log(result)
        res.json(result)
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

router.get('/getActivitiesInRange/:id', async(req,res) =>{
    try{
        const user = await User.findById(req.params.id);
        const result = user.dailyActivities.filter(async (dailyActivityID) => {
            activity = await DailyActivity.findById(dailyActivityID)
            
            console.log(new Date(req.query.start).getTime() <= activity.date.getTime() && activity.date.getTime() <= new Date(req.query.end).getTime())

            return (new Date(req.query.start).getTime() <= activity.date.getTime() && activity.date.getTime() <= new Date(req.query.end).getTime())
        })
        console.log(result)
        res.json(result);
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async(req,res) =>{
    try{
        const data = await DailyActivity.findById(req.params.id);
        res.json(data);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;