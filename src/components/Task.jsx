
export default function Task({ task, onToggle }) {
    return (
      <li
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
          margin: "8px 0",
          color: task.completed ? "#888" : "#000",
          padding: "8px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
        }}
      >
        {task.text}
      </li>
    );
  }