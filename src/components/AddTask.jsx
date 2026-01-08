import React, { useState } from "react";
import "../AddTask.css";

const AddTask = ({ setTasks }) => {
  const [text, setText] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
        assignedTo,
      },
    ]);

    setText("");
    setAssignedTo("");
  };

  return (
    <form className="addtask-form" onSubmit={handleSubmit}>
      <input
        className="addtask-input"
        type="text"
        placeholder="Új feladat"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        className="addtask-input"
        type="text"
        placeholder="Felelős neve"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />

      <button className="addtask-button" type="submit">
        Hozzáadás
      </button>
    </form>
  );
};

export default AddTask;
