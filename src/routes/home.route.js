const homeController = require("../controllers/home.controller");
const middleware = require("../middleware/login.middleware");

const express = require("express");
const router = express.Router();

router.get("/", middleware.loggedIn, homeController.home);
router.get("/create", middleware.loggedIn, homeController.create);
router.post("/", middleware.loggedIn, homeController.postCreate);
router.get("/edit/:_id", middleware.loggedIn, homeController.edit);
router.post("/edit/:_id", middleware.loggedIn, homeController.editPost);
router.get("/delete/:_id", middleware.loggedIn, homeController.delete);
module.exports = router;
