const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");

router.post("/", authenticate, taskController.create);
router.get("/", authenticate, taskController.getAll);
router.get("/:id", authenticate, taskController.getById);
router.put("/:id", authenticate, taskController.update);
router.delete("/:id", authenticate, taskController.delete);

module.exports = router;