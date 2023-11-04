const express = require('express')

const Resource = require('../models/resource')

const router = express.Router()

module.exports = router

router.post('/create', async (req, res)=> {
    const data = new Resource ({
        title: req.body.title,
        link: req.body.link,
        ft_img: req.body.ft_img,
        organization: req.body.organization
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
});

router.patch('/:link', async(req,res) =>{
    try {
        const filter = { link: req.params.link };
        const updateResource = req.body
        const options = { new:true};
        
        const result = await Resource.findOneAndUpdate(
            filter, updateResource, options
        )
        res.json(result)
    } catch(error) {
        res.status(400).json({message:error.message})
    }
});

router.delete('/:link', async(req, res) => {
    try{
        const filter = { link: req.params.link };
        const data = await Resource.findOneAndDelete(filter);
        if (!data) {
            res.send("No resource with such link");
        } else res.send(`Resource '${data.title}' (link ${data.link}) has been deleted.`)
    } catch(error) {
        res.status(400).json({message:error.message})
    }
})