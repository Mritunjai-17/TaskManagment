const taskRepository = require("../repositories/taskRepository");

class TaskService {

    async create(taskData) {
        return await taskRepository.create(taskData);
    }

    async getAll(user) {
        return await taskRepository.getAll(user);
    }

    async getById(id) {
        return await taskRepository.getById(id);
    }

    async update(id, data) {
        return await taskRepository.update(id, data);
    }

    async delete(id) {
        return await taskRepository.delete(id);
    }

}

module.exports = new TaskService();