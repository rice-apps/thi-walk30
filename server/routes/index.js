const express = require("express");
const events = require("./events");
const organization = require("./organization")
const router = express.Router();

router.use("/events", events);
router.use("/organization", organization);

module.exports = router;