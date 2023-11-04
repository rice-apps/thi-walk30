const events = require("./events");
const express = require("express");
const router = express.Router();

router.use("/event", events);

module.exports = router;
