

const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.use("/user", User);

module.exports = router

router.post('/create', async (req, res) => {
    const data = new User({
        name: req.body.name,
        img: req.body.img,
        adminStatus: req.body.adminStatus
    });

    data.dateJoined = Date.now();

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateUser = req.body
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updateUser, options
        )
        res.send(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

});

router.get('/:id', async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        if (data == null) res.status(404).send("User does not exist.");
        else res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const data = await User.findByIdAndDelete(id);

        res.send(`User '${data.name}' (id ${id}) has been deleted.`);

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})