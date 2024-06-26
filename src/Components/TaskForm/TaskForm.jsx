import React, { useState } from "react";
import styles from "./TaskForm.module.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    status: "todo",
  });
 const [error, setError] = useState("");
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskData.task.trim()) {
      setError("Task title is required");
      return;
    }
    setTasks(taskData);
    setTaskData({
      task: "",
      description: "",
      status: "todo",
    });
    setError("");
  };

  return (
    <header className={styles.app_header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          required=""
          value={taskData.task}
          className={styles.task_input}
          placeholder="Enter your task"
          onChange={handleChange}
        />
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.task_form_bottom}>
          <div>
            <textarea
              name="description"
              value={taskData.description}
              className={styles.task_description}
              placeholder="Enter a description"
              onChange={handleChange}
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
