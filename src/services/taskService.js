const taskRepository = require("../repositories/taskRepository");

class TaskService {

    async create(taskData) {
        return await taskRepository.create(taskData);
    }

    async getAll(user) {
        return await taskRepository.getAll(user);
    }

}

module.exports = new TaskService();