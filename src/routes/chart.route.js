const chartController = require("../controllers/char.controller");
const express = require("express");
const router = express.Router();
router.get("/", chartController.index);
module.exports = router;
