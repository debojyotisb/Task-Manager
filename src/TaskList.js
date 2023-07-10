
import React from "react";
const TaskList = (props) => {
    return <>
        <li> {props.text} </li><button>-</button>
        </>
};

export default TaskList;