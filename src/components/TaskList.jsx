import React from "react";
import TaskItem from "./TaskItem";
import "../TaskList.css"

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className="tasklist">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default TaskList;
