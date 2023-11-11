const events = require("./events");
const user = require("./user");
const dailyActivity = require("./dailyActivity");
const express = require("express");
const router = express.Router();

router.use("/event", events);
router.use("/user", user);
router.use("/dailyActivity", dailyActivity);

module.exports = router;