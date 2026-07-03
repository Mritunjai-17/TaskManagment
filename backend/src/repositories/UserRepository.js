const { User } = require("../models");

class UserRepository {

    async create(userData) {
        return await User.create(userData);
    }

    async getByEmail(email) {
        return await User.findOne({
            where: { email }
        });
    }

    async getById(id) {
        return await User.findByPk(id);
    }

}

module.exports = new UserRepository();