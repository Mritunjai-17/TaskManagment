import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

function Dashboard() {

    const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editingTaskId, setEditingTaskId] = useState(null);

    // ==========================
    // Fetch All Tasks
    // ==========================
    const fetchTasks = async () => {

        try {

            const response = await api.get("/tasks");

            setTasks(response.data.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchTasks();

    }, []);

    // ==========================
    // Create Task
    // ==========================
    const createTask = async () => {

        try {

            await api.post("/tasks", {

                title,
                description

            });

            setTitle("");
            setDescription("");

            fetchTasks();

        } catch (error) {

            console.log(error);

        }

    };

    // ==========================
    // Update Task
    // ==========================
    const updateTask = async () => {

        try {

            await api.put(`/tasks/${editingTaskId}`, {

                title,
                description

            });

            setTitle("");
            setDescription("");
            setEditingTaskId(null);

            fetchTasks();

        } catch (error) {

            console.log(error);

        }

    };

    // ==========================
    // Edit Task
    // ==========================
    const editTask = (task) => {

        setTitle(task.title);
        setDescription(task.description);
        setEditingTaskId(task.id);

    };

    // ==========================
    // Delete Task
    // ==========================
    const deleteTask = async (id) => {

        try {

            await api.delete(`/tasks/${id}`);

            fetchTasks();

        } catch (error) {

            console.log(error);

        }

    };

    // ==========================
    // Logout
    // ==========================
    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <>
            <Navbar logout={logout} />

            <div style={{ padding: "30px" }}>

                <TaskForm
                    title={title}
                    description={description}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    createTask={createTask}
                    updateTask={updateTask}
                    editingTaskId={editingTaskId}
                />

                <hr />

                <h2>Your Tasks</h2>

                {

                    tasks.length === 0 ? (

                        <p>No Tasks Found</p>

                    ) : (

                        tasks.map((task) => (

                            <TaskCard
                                key={task.id}
                                task={task}
                                onDelete={deleteTask}
                                onEdit={editTask}
                            />

                        ))

                    )

                }

            </div>

        </>

    );

}

export default Dashboard;