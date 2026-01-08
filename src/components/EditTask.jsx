import React, { useState } from "react";

const EditTask = ({ task, setTasks, setIsEditing }) => {
  const [text, setText] = useState(task.text);
  const [assignedTo, setAssignedTo] = useState(task.assignedTo);

  const handleSave = (e) => {
    e.preventDefault();
    setTasks(prev =>
      prev.map(obj =>
        obj.id === task.id ? { ...obj, text, assignedTo } : obj
      )
    );
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSave}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <input value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} />
      <button type="submit">Mentés</button>
      <button type="button" onClick={() => setIsEditing(false)}>Mégse</button>
    </form>
  );
};

export default EditTask;
