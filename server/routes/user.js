

const express = require('express')

const User = require('../models/user')

const router = express.Router()

module.exports = router



router.post('/createUser', async (req,res)=> {
    const data = new User({
        name: req.body.name,
        ID: req.body.ID,
        imageID: req.body.imageID,
        dailyActivities: req.body.dailyActivities,
        upcomingEvents: req.body.upcomingEvents,
        dateJoined: req.body.dateJoined
        
    });

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch(error){
        res.status(400).json({message: error.message})
    }
});

router.patch('/updateUser/:id', async(req,res) =>{
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

router.post('/getUser/', async(req,res) =>{
    try{
        const data = await User.findById(req.params.id);
        res.json(data);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

router.post('/getActivityTime/', async(req,res) =>{
    try{
        const data = await User.findById(req.params.id);
        const result = data.dailyActivities.filter(function (dailyActivity){
            return req.params.after <= dailyActivity.date <= req.params.before
        })
        res.json(result);
    } catch(error){
        res.status(500).json({ message: error.message })
    }

})

router.delete('/deleteUser/', async(req,res) =>{
    try{
        const id = req.params.id;

        const data = await User.findByIdAndDelete(id);

        res.send(`User '${data.name}' (id ${id}) has been deleted.`);

    }catch(error){
        res.status(400).json({message:error.message})
    }
})