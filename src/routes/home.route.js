const homeController = require("../controllers/home.controller");
const middleware = require("../middleware/login.middleware");

const express = require("express");
const router = express.Router();

router.get("/", middleware.loggedIn, homeController.home);
router.get("/create", middleware.loggedIn, homeController.create);
router.post("/create", middleware.loggedIn, homeController.postCreate);

module.exports = router;
