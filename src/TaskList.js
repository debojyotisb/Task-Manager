
import React from "react";
const TaskList = (props) => {
    
    return (
    <div>
        <li> {props.text} </li>

        <button onClick={() => {
            props.id(props.text)
        }}>Edit</button>

        <button onClick={() => {
            props.onSelect(props.id)
        }}
        >Delete
        </button>
    </div>
        ) 
};

export default TaskList;