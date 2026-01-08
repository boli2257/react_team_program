import { useState } from "react";

export function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const t = title.trim();
    const a = assignee.trim();

    if (!t || !a) return;

    onAdd({
      title: t,
      assignee: a,
      done: false,
    });

    setTitle("");
    setAssignee("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
      <input
        type="text"
        placeholder="Új feladat"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ flex: 1 }}
      />

      <input
        type="text"
        placeholder="Fejlesztő neve"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        style={{ width: 160 }}
      />

      <button type="submit">Hozzáadás</button>
    </form>
  );
}
