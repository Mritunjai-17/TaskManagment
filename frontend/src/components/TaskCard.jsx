function TaskCard({ task, onDelete, onEdit }) {

    return (

        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "8px"
            }}
        >

            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>

                <strong>Status:</strong> {task.status}

            </p>

            <button
                onClick={() => onDelete(task.id)}
            >
                Delete
            </button>

            <button
                onClick={()=>onEdit(task)}
        >

    Edit

</button>

{" "}

            <button
                onClick={()=>onDelete(task.id)}
            >

            Delete

</button>

        </div>

    );

}

export default TaskCard;