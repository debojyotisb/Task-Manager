import React, { useState } from "react";
import TaskList from "./TaskList";
import './App.css';


export default function ListOfTask() {
    const [tasks, setTasks] = useState("");
    const [items, setItems] = useState([]);
    // const [edit, setEdit] = useState(true);



    const handleChange = (event) => {
        setTasks(event.target.value);
    }
    // console.log(handleChange);

    const taskList = () => {
        setItems((oldItems) => {
            return [...oldItems, tasks];
        });
        setTasks("");
    };
    // console.log(taskList);

    const deleteTask = (id) => {
        // console.log('Deleted')
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    const editTask = (id) => {
        // console.log("edited", id)
        setTasks(items[id])
        deleteTask((id))
        // setEdit(true)
        // console.log(setEdit) 
    }


    return (
        <div>
            <input type="text" placeholder="Add task" value={tasks} required onChange={handleChange} className="input"/>

            <button type="submit" onClick={taskList} required className="button"> Add Task </button>
            <ul className="inputlist">
                {items.map((itemval, index) => {
                    return <TaskList
                        key={index}
                        id={index}
                        text={itemval}
                        onSelect={deleteTask}
                        onEdit={editTask} />
                })}
            </ul>

        </div>
    )
}