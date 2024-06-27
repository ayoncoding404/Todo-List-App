import { useEffect, useState } from "react";
import { TbTargetArrow, TbCalendarClock } from "react-icons/tb";
import { MdTaskAlt } from "react-icons/md";
import TaskColumn from "./Components/TaskColumn/TaskColumn";
import TaskForm from "./Components/TaskForm/TaskForm";
import "./App.css";

const todoTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(todoTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const filteredTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(filteredTasks);
  };

  const handleAddTask = (taskData) => {
    setTasks([taskData, ...tasks]);
  };

  const handleMove = (taskIndex, newStatus) => {
    let completedAt = null;
    if (newStatus === "done") completedAt = new Date().getTime();
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex
        ? { ...task, status: newStatus, completedAt: completedAt }
        : task
    );
    setTasks(updatedTasks);
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
          handleMove={handleMove}
        />
        <TaskColumn
          title="Ongoing"
          icon={TbCalendarClock}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          handleMove={handleMove}
        />
        <TaskColumn
          title="Done"
          icon={MdTaskAlt}
          tasks={tasks.sort((a, b) => b.completedAt - a.completedAt)}
          status="done"
          handleDelete={handleDelete}
          handleMove={handleMove}
        />
      </main>
    </div>
  );
};

export default App;
