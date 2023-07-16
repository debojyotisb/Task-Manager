
import React from "react";
import './App.css';

const TaskList = (props) => {
    
    return (
    <div className="li">
        <li > {props.text} </li>

        <button onClick={() => {
            props.onEdit(props.id)
        }} className="button">Edit</button>

        <button onClick={() => {
            props.onSelect(props.id)
        }} className="button">Delete
        </button>
    </div>
        ) 
};

export default TaskList;