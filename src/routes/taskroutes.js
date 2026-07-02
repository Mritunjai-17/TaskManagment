const express = require("express");

const router = express.Router();

const authenticate = require("../middleware/authMiddleware");

const taskController = require("../controllers/taskController");

router.post("/", authenticate, taskController.create);

router.get("/", authenticate, taskController.getAll);

module.exports = router;