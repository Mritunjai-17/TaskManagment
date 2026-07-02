const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRepository = require("../repositories/userRepository");

class AuthService {

    async register(userData) {

        const existingUser = await userRepository.getByEmail(userData.email);

        if (existingUser) {
            throw new Error("Email already exists");
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);

        userData.password = hashedPassword;

        const user = await userRepository.create(userData);

        return user;
    }

    async login(email, password) {

        const user = await userRepository.getByEmail(email);

        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error("Invalid email or password");
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        return {
            token,
            user
        };
    }

}

module.exports = new AuthService();