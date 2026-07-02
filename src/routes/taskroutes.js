const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");
const taskValidation=require("../validations/taskValidation");
const validate=require("../middleware/validationMiddleware");

router.post(
    "/",
    authenticate,
    taskValidation,
    validate,
    taskController.create
);

router.get("/", authenticate, taskController.getAll);
router.get("/:id", authenticate, taskController.getById);
router.put("/:id", authenticate, taskValidation, validate, taskController.update);
router.delete("/:id", authenticate, taskController.delete);

module.exports = router;