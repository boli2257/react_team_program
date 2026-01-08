import React, { useState } from "react";
import EditTask from "./EditTask";

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
    <li>
      <input type="checkbox" checked={task.completed} onChange={toggleCompleted} />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text} <em>(Felelős: {task.assignedTo})</em>
      </span>
      <button className="szerk" onClick={() => setIsEditing(true)}>Szerkesztés</button>
      <button className="torol" onClick={handleDelete}>Törlés</button>
    </li>
  );
};

export default TaskItem;