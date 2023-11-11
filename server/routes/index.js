const events = require("./events");
const resource = require("./resource");
const organization = require("./organization");
const express = require("express");
const router = express.Router();

router.use("/event", events);
router.use("/resource", resource);
router.use("/organization", organization);

module.exports = router;
