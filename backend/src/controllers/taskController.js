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

    async getById(req, res) {

    try {

        const task = await taskService.getById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        if (
            req.user.role !== "admin" &&
            task.userId !== req.user.id
        ) {
            return res.status(403).json({
                success: false,
                message: "Access Denied"
            });
        }

        return res.json({
            success: true,
            data: task
        });

    } 
        catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }

     }

     async update(req, res) {

    try {

        const task = await taskService.getById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        if (
            req.user.role !== "admin" &&
            task.userId !== req.user.id
        ) {
            return res.status(403).json({
                success: false,
                message: "Access Denied"
            });
        }

        const updatedTask = await taskService.update(
            req.params.id,
            req.body
        );

        return res.json({
            success: true,
            data: updatedTask
        });

    } 
        catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    async delete(req, res) {

    try {

        const task = await taskService.getById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        if (
            req.user.role !== "admin" &&
            task.userId !== req.user.id
        ) {
            return res.status(403).json({
                success: false,
                message: "Access Denied"
            });
        }

        await taskService.delete(req.params.id);

        return res.json({
            success: true,
            message: "Task Deleted Successfully"
        });

    } 
        catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

}

module.exports = new TaskController();