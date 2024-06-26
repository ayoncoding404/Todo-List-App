import React from "react";
import styles from "./TaskForm.module.css";

const TaskForm = () => {
  return (
    <header className={styles.app_header}>
      <form>
        <input
          type="text"
          className={styles.task_input}
          placeholder="Enter your task"
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
            <select className={styles.task_status}>
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
