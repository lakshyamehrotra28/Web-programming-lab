import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTaskList([...taskList, task]); // spread operator
    setTask(""); // clear input
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        border: "2px solid black",
        padding: "20px",
        width: "300px",
        margin: "auto",
        backgroundColor: "#fff3e6"
      }}
    >
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br /><br />

      <button onClick={addTask}>Add Task</button>

      <ul style={{ marginTop: "20px", textAlign: "left" }}>
        {taskList.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;