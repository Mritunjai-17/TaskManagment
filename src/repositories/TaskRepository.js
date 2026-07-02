const { Task } = require("../models");

class TaskRepository {

    async create(taskData) {
        return await Task.create(taskData);
    }

    async getAll(user) {

        if (user.role === "admin") {
            return await Task.findAll();
        }

        return await Task.findAll({
            where: {
                userId: user.id
            }
        });

    }

}

module.exports = new TaskRepository();