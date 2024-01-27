const events = require("./events");
const user = require("./user");
const dailyActivity = require("./dailyActivity");
const resource = require("./resource");
const organization = require("./organization");
const express = require("express");
const router = express.Router();

router.use("/event", events);
router.use("/user", user);
router.use("/dailyActivity", dailyActivity);
router.use("/resource", resource);
router.use("/organization", organization);

module.exports = router;