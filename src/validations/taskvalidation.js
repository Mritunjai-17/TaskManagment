const { body } = require("express-validator");

const taskValidation = [

    body("title")
        .notEmpty()
        .withMessage("Title is required"),

    body("description")
        .notEmpty()
        .withMessage("Description is required"),

    body("status")
        .optional()
        .isIn(["pending","completed"])
        .withMessage("Status should be pending or completed")

];

module.exports = taskValidation;