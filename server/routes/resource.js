const express = require('express')

const Resource = require('../models/resource')

const router = express.Router()

module.exports = router

router.post('/createResource', async (req, res)=> {
    const data = new Resource ({
        title: req.body.title,
        link: req.body.link,
        featureImage: req.body.featureImage,
        organization: req.body.organization
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
});

router.patch('/updateResource/:link', async(req,res) =>{
    try {
        const filter = { link: req.params.link };
        const updateResource = req.body
        const options = { new:true};
        
        const result = await Resource.findOneAndUpdate(
            filter, updateResource, options
        )
        res.send(result)
    } catch(error) {
        res.status(400).json({message:error.message})
    }
});

router.delete('deleteResource/:link', async(req, res) => {
    try{
        const filter = { link: req.params.link };
        const data = await Resource.findOneAndDelete(filter)
        res.send(`Resource '${data.title}' (link ${link}) has been deleted.`)
    } catch(error) {
        res.status(400).json({message:error.message})
    }
})