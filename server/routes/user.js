

const express = require('express')

const User = require('../models/user')

const DailyActivity = require('../models/dailyActivity')

const router = express.Router()

router.use("/user", User);

module.exports = router

router.post('/create', async (req,res)=> {
    const data = new User({
        name: req.body.name,
        imgURL: req.body.imgURL,
        dailyActivities: req.body.dailyActivities,
        upcomingEvents: req.body.upcomingEvents,
        dateJoined: req.body.dateJoined,
        adminStatus: req.body.adminStatus
    });

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
});

router.patch('/update/:id', async(req,res) =>{
    try {
        const id = req.params.id;
        const updateUser = req.body
        const options = { new:true};

        const result = await User.findByIdAndUpdate(
            id, updateUser, options
        )
        res.send(result)
    } catch(error) {
        res.status(400).json({message:error.message})
    }

});

router.get('/:id', async(req,res) =>{
    try{
        const data = await User.findById(req.params.id);
        res.json(data);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

router.get('/getActivityByDate/:id', async(req,res) =>{
    try{
        const data = await User.findById(req.params.id);
        const result = data.dailyActivities.filter(function (dailyActivityID) {
            const dailyActivity = DailyActivity.findById(dailyActivityID)
            return req.params.after <= dailyActivity.date && dailyActivity.date <= req.params.before
        })
        res.json(data);
    } catch(error) {
        res.status(500).json({ message: error.message })
    }

})

router.delete('/delete/:id', async(req,res) =>{
    try {
        const id = req.params.id;

        const data = await User.findByIdAndDelete(id);

        res.send(`User '${data.name}' (id ${id}) has been deleted.`);

    } catch(error) {
        res.status(400).json({message:error.message})
    }
})