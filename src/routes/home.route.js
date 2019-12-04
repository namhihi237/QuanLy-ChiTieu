const homeController = require("../controllers/home.controller");

const express = require("express");
const router = express.Router();

router.get("/", homeController.home);
router.get("/create", homeController.create);
router.post("/", homeController.postCreate);
router.get("/edit/:_id", homeController.edit);
router.post("/edit/:_id", homeController.editPost);
router.get("/delete/:_id", homeController.delete);
router.get("/user", homeController.user);
module.exports = router;
