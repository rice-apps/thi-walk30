const events = require("./events");
const express = require("express");
const router = express.Router();

router.use(events);

module.exports = router;