import React, { useState } from "react";
import styles from "./TaskForm.module.css";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("todo")

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const  handleStatusChange =(e) =>{
    setStatus(e.target.value)
  }
  //console.log(task,status)

  return (
    <header className={styles.app_header}>
      <form>
        <input
          type="text"
          className={styles.task_input}
          placeholder="Enter your task"
          onChange={handleTaskChange}
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
            <select className={styles.task_status}
             onChange={handleStatusChange}>
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
