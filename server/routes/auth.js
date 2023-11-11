const express = require("express");
require("dotenv").config();
const router = express.Router();
const {smsValidation} = require("../backend_helper");
const serviceSid = process.env.TWILIO_SERVICE_SID;


router.get("/sendSms", async (req, res, next) => {
    try {
        const {phoneNumber} = req.body;
        const data = await smsValidation.sendSms(phoneNumber, serviceSid)
        res.send(data);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

router.get("/verify", async (req, res, next) => {
    try {
        const {phoneNumber, code} = req.body;
        const data = await smsValidation.verify(phoneNumber, serviceSid, code);
        if (data.valid == false) throw new Error("Wrong SMS Code")
        
        // Valid SMS, do something...
        res.send(data);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

module.exports = router