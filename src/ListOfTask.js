import React, { useState } from "react";
import TaskList  from "./TaskList";


// const initialTask = [
//     {id: 1, text: "walk with Dog", completed: false},
//     {id: 2, text: "walk with Cat", completed: false},
//     {id: 3, text: "walk with Cow", completed: false},
//     {id: 4, text: "walk with Lady", completed: true},

// ]

export default function ListOfTask () {
    const [tasks, setTasks] = useState("");
    const [items, setItems] = useState([]);


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
        console.log('Deleted')
        setItems((oldItems) => {
         return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    // const editTask = () => {
    //     console.log("edited")
    //     setItems(true)
    // }


return (
    <div>
        <input type="text" placeholder="Add task" value={tasks} onChange={handleChange}/>
        <button type="submit" onClick={taskList}>Add task</button>
        <ul>
            {items.map((itemval, index) => {
               return <TaskList 
               key={index} 
               id={index} 
               text={itemval}
               onSelect={deleteTask}
               />
            })}
        </ul> 
        
    </div>
    )
}