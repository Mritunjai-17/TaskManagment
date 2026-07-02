const taskService = require("../services/taskService");

class TaskController {

    async create(req, res) {

        try {

            const task = await taskService.create({
                ...req.body,
                userId: req.user.id
            });

            return res.status(201).json({
                success: true,
                data: task
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    async getAll(req, res) {

        try {

            const tasks = await taskService.getAll(req.user);

            return res.json({
                success: true,
                data: tasks
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

}

module.exports = new TaskController();