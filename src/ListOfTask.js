import React from "react";
import {v4 as uuidv4} from "uuid";

export default function ListOfTask ({ input, setInput, task, setTask }) {

 

    const handleChange = (event) => {
        setInput(event.terget.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTask([ ...task, {id: uuidv4(), title: input, completed: false }]);
        setInput("");
    };

    return (
       <form onSubmit={onFormSubmit}>
         <input type="text" placeholder="Task Name" value={input} required onChange={handleChange}></input>
            <button  type="submit"> Add task</button>
       </form>
    )
}