const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const accessAdmin = require ('../middlewares/accessAdmin')


router.get("/", mainController.index);
router.get("/services", mainController.service);
router.get("/admin", accessAdmin, mainController.admin);

module.exports =router;