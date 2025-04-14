// src/App.jsx
import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build project", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Add new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          completed: false,
        },
      ]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      {/* Add Task Form */}
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task..."
          className="task-input-field"
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span onClick={() => toggleTask(task.id)}>{task.text}</span>
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(task.id);
              }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
