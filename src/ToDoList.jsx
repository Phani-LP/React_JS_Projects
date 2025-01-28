import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoListApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>To Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask} class="btn btn-success">Add Task</button><br/><br/>

      <table class="table table-success table-striped">
        <tr className="tr-class">
            <th colSpan={3}>Task Name</th>
            <th>Action</th>
        </tr>
          {tasks.map((task, index) => (
            <tr key={index} className="tr-class">
              <td colSpan={3}>{task}</td>
              <td>
                <button onClick={() => handleRemoveTask(index)} class="btn btn-secondary btn-sm">
                  Remove Task
                </button>
              </td>
            </tr>
          ))}
        
      </table>
    </div>
  );
}

export default ToDoListApp;
