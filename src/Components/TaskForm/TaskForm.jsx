import React, { useState } from "react";
import styles from "./TaskForm.module.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
  };

  return (
    <header className={styles.app_header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className={styles.task_input}
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className={styles.task_form_bottom}>
          <div>
            <textarea
              type="text"
              className={styles.task_description}
              placeholder="Enter a description"
            />
          </div>
          <div>
            <select
              className={styles.task_status}
              value={taskData.status}
              name="status"
              onChange={handleChange}
            >
              <option value="todo">New</option>
              <option value="doing">Ongoing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className={styles.task_submit}>
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
