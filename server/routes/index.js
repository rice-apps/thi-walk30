const events = require("./event");
const user = require("./user");
const dailyActivity = require("./dailyActivity");
const resource = require("./resource");
const organization = require("./organization");
const announcement = require("./announcement");
const stat = require("./stat");
const express = require("express");
const router = express.Router();

router.use("/event", events);
router.use("/user", user);
router.use("/daily-activity", dailyActivity);
router.use("/resource", resource);
router.use("/organization", organization);
router.use("/announcement", announcement);
router.use("/stat", stat)

module.exports = router;