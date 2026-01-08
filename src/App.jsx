import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const initialTasks = [
  { id: 1, text: "Első feladat", completed: false, assignedTo: "Anna" },
  { id: 2, text: "Második feladat", completed: true, assignedTo: "Béla" },
  { id: 3, text: "Harmadik feladat", completed: false, assignedTo: "Csaba" },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div>
      <h1>Feladatlista</h1>
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
