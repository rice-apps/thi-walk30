const express = require('express')

const DailyActivity = require('../models/dailyActivity')
const User = require('../models/user')

const router = express.Router()

router.post('/create/:id', async (req, res) => {
    const data = new DailyActivity({
        steps: req.body.steps,
        miles: req.body.miles,
        minutes: req.body.minutes,
        date: Date.parse(req.body.date),
        userID: req.params.id
    });

    try {
        const user = await User.findById(req.params.id);
        if (user.dailyActivities === undefined) {
            user.dailyActivities = [];
        }
        user.dailyActivities.push(data._id);

        const dataToSave = await data.save();
        await user.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.get('/in-range/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        var start_date = new Date(req.query.start);

        // Setting end_date to start_date if activities on particular day are being searched
        var end_date = req.query.end === undefined ? end_date = new Date(start_date) : end_date = new Date(req.query.end);

        // Set end date to end of day to include all events on selected end date
        start_date.setUTCHours(0, 0, 0, 0);
        end_date.setUTCHours(23, 59, 59, 999);
        console.log(start_date, end_date)

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
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const data = await DailyActivity.findById(req.params.id);
        if (data === null) res.status(404).send("Daily activity does not exist.");
        else res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/for-user/:id', async (req,res) => {
    try {
        const dailyActivities = await DailyActivity.find({ userID: req.params.id });
        res.json(dailyActivities);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateDailyActivity = req.body
        const options = { new: true };
        console.log(id)
        const result = await DailyActivity.findByIdAndUpdate(
            id, updateDailyActivity, options
        )
        res.send(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const dailyActivity = await DailyActivity.findById(id)
        if (dailyActivity == null) {
            res.status(404).send(`Daily activity ${id} does not exist.`).send();
            return;
        }
        const user = await User.findById(dailyActivity.userID)

        const index = user.dailyActivities.indexOf(id)
        user.dailyActivities.splice(index, 1)

        await user.save()
        await DailyActivity.findByIdAndDelete(id)
        res.send(`Daily Activity '${id}' has been deleted.`);

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;