const express = require("express");
const resource = require("./resource");
const organization = require("./organization");
const router = express.Router();

router.use("/resource", resource);
router.use("/organization", organization);

module.exports = router;