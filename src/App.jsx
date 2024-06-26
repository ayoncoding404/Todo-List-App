import "./App.css";
import TaskColumn from "./Components/TaskColumn/TaskColumn";
import TaskForm from "./Components/TaskForm/TaskForm";

import { TbTargetArrow, TbCalendarClock } from "react-icons/tb";
import { MdTaskAlt } from "react-icons/md";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="New" icon={TbTargetArrow}/>
        <TaskColumn title="Ongoing"  icon={TbCalendarClock} />
        <TaskColumn title="Done"  icon={MdTaskAlt}/>
      </main>
    </div>
  );
};

export default App;
