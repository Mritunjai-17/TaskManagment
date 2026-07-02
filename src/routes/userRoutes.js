const express = require("express");

const router = express.Router();

const authenticate = require("../middleware/authMiddleware");

const userController = require("../controllers/userController");

router.get("/profile", authenticate, userController.profile);

module.exports = router;