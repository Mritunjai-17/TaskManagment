function TaskForm({

title,

description,

setTitle,

setDescription,

createTask,

updateTask,

editingTaskId

}) {

    return (

        <>

            <h2>Create Task</h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <br /><br />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />

            <br /><br />

           <button 
                onClick={
                    editingTaskId
                        ? updateTask
                            : createTask
            }
        >

        {

            editingTaskId

                ? "Update Task"

                : "Create Task"

        }

</button>

        </>

    );

}

export default TaskForm;