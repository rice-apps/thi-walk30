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

router.get('/getActivitiesInRange/:id', async(req,res) =>{
    try{
        const user = await User.findById(req.params.id);
        var start_date = new Date(req.query.start)
        var end_date
        // Setting end_date to start_date if activities on particular day are being searched
        if (req.query.end === undefined) {
            end_date = start_date
        }
        else {
            end_date = new Date(req.query.end)
        }

        //Set end date to end of day to include all events on selected end date
        end_date.setUTCHours(23,59,59,999)
        
        async function filterDailyActivities(user, start_date, end_date) {
            // Map each dailyActivityID to a promise that resolves to true or false
            const checks = await Promise.all(user.dailyActivities.map(async (dailyActivityID) => {
                const activity = await DailyActivity.findById(dailyActivityID);
                return start_date <= activity.date && activity.date <= end_date;
            }));
            // Filter the original array based on the checks
            const filteredActivities = user.dailyActivities.filter((_, index) => checks[index]);
            return filteredActivities;
        }
        filterDailyActivities(user, start_date, end_date).then(result => {
            res.json(result);
        })
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

router.patch('/update/:id', async(req,res) =>{
    try {
        const id = req.params.id;
        const updateDailyActivity = req.body
        const options = { new:true};
        console.log(id)
        const result = await DailyActivity.findByIdAndUpdate(
            id, updateDailyActivity, options
        )
        res.send(result)
    } catch(error) {
        res.status(400).json({message:error.message})
    }

});

router.delete('/delete/:id', async(req,res) =>{
    try {
        const id = req.params.id
        const dailyActivity = await DailyActivity.findById(id)
        const user = await User.findById(dailyActivity.userID)

        const index = user.dailyActivities.indexOf(id)
        user.dailyActivities.splice(index, 1)

        await user.save()
        await DailyActivity.findByIdAndDelete(id)
        res.send(`Daily Activity '${id}' has been deleted.`);

    } catch(error) {
        res.status(400).json({message:error.message})
    }
})

module.exports = router;