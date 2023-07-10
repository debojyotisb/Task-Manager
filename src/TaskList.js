
import React from "react";
function TaskList ({ task, setTask }) {
    return (
        <>
        {task.map((task) => {
            <li key={task.id}>
                <input  type="text" value={task.title} onChange={(event) => event.preventDefault()}/>
            </li>
        })}
        </>
    )
};

export default TaskList;