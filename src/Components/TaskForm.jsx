import React from "react";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input type="text" className="task_input"
        placeholder="Enter your task" />
        <textarea type="text" className="task_description" 
            placeholder="Enter a description"
        />
        <select className="task_status">
            <option value="todo">New</option>
            <option value="doing">Ongoing</option>
            <option value="done">Done</option>
        </select>
        <button type="submit" className="task_submit">+ Add Task</button>
      </form>
    </header>
  );
};

export default TaskForm;
