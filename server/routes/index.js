const events = require("./events");
const user = require("./user");
const express = require("express");
const router = express.Router();

router.use("/event", events);
router.use("/user", user);

module.exports = router;