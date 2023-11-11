const user = require("./user");
const express = require("express");
const router = express.Router();

router.use("/user", user);
// router.use("/event", events);

module.exports = router;