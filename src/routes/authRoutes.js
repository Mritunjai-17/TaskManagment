const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

const validate = require("../middleware/validationMiddleware");

const {
registerValidation,
loginValidation
}=require("../validations/authValidation");

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */

router.post(
    "/register",
    registerValidation,
    validate,
    authController.register
);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login User
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Login Successful
 */

router.post(
    "/login",
    loginValidation,
    validate,
    authController.login
);

module.exports = router;