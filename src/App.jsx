import { useState } from "react";
import "./App.css";
import TaskColumn from "./Components/TaskColumn/TaskColumn";
import TaskForm from "./Components/TaskForm/TaskForm";

import { TbTargetArrow, TbCalendarClock } from "react-icons/tb";
import { MdTaskAlt } from "react-icons/md";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (taskIndex) => {
    const filteredTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(filteredTasks);
  };

  const handleAddTask = (taskData) => {
    setTasks([...tasks, taskData]);
  };

  return (
    <div className="app">
      <TaskForm setTasks={handleAddTask} />
      <main className="app_main">
        <TaskColumn
          title="New"
          icon={TbTargetArrow}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Ongoing"
          icon={TbCalendarClock}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={MdTaskAlt}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
