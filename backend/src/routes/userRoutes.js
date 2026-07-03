const express = require("express");

const router = express.Router();

const authenticate = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

const userController = require("../controllers/userController");

router.get(
    "/profile",
    authenticate,
    userController.profile
);

router.get(
    "/admin",
    authenticate,
    authorizeRole("admin"),
    (req, res) => {

        res.json({
            success: true,
            message: "Welcome Admin"
        });

    }
);

module.exports = router;