const express = require("express");
const resource = require("./resource");
const organization = require("./organization");
const auth = require("./organization");

const router = express.Router();

router.use("/resource", resource);
router.use("/organization", organization);
router.use("/auth", auth);

module.exports = router;