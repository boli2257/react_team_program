import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Feladat"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Felelős"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />
      <button type="submit">Hozzáadás</button>
    </form>
  );
};

export default AddTask;