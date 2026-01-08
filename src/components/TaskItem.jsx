import React, { useState } from "react";
import EditTask from "./EditTask";
import "../TaskItem.css";

const TaskItem = ({ task, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleCompleted = () => {
    setTasks(prev =>
      prev.map(obj =>
        obj.id === task.id
          ? { ...obj, completed: !obj.completed }
          : obj
      )
    );
  };

  const handleDelete = () => {
    setTasks(prev => prev.filter(obj => obj.id !== task.id));
  };

  if (isEditing) {
    return (
      <EditTask task={task} setTasks={setTasks} setIsEditing={setIsEditing} />
    );
  }

  return (
    <li className="taskitem">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleCompleted}
      />

      <span className={task.completed ? "task-text done" : "task-text"}>
        {task.text}
        <span className="task-owner"> (Felelős: {task.assignedTo})</span>
      </span>

      <button
        className="task-btn edit"
        onClick={() => setIsEditing(true)}
      >
        Szerkesztés
      </button>

      <button
        className="task-btn delete"
        onClick={handleDelete}
      >
        Törlés
      </button>
    </li>
  );
};

export default TaskItem;
