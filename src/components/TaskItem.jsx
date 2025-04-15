// TaskItem.jsx
import React from "react";

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li
      className={`task-item ${task.completed ? "completed" : ""}`}
      onClick={() => toggleTask(task.id)}
    >
      <span>{task.text}</span>
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
  );
};

export default TaskItem;
