import React, { useState } from "react"
import ListOfTask from "./ListOfTask";
import Header from "./Header";
import TaskList from "./Tasklist";

const App = () => {

  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  return (
    <>

    <div>
    <Header />
    </div>
    <div>
    <ListOfTask />
    </div>
     <div>
     <form 
     input = {input}
     setInput = {setInput}
     task = {task}
     setTask = {setTask}
     />
    </div> 
    <div>
    <TaskList task={task} setTask={setTask} />
    </div>

    </>
  );
}

export default App;
