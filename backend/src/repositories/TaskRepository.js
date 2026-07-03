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
  
    async getById(id) {
    return await Task.findByPk(id);
}

 async update(id, data) {
     await Task.update(data, {
        where: {
            id
        }
    });

    return await this.getById(id);
}

async delete(id) {
    return await Task.destroy({
        where: {
            id
        }
    });
}

}

module.exports = new TaskRepository();