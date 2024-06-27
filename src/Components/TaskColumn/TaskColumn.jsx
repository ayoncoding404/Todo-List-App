import React from 'react';
import styles from './TaskColumn.module.css';
import TaskCard from '../TaskCard/TaskCard';

const TaskColumn = ({ title, icon: Icon, tasks, status, handleDelete, handleMove }) => {
  return (
    <section className="task_column">
      <h2 className={styles.task_column_heading}>
        <Icon className={styles.task_column_icon} /> {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              description={task.description}
              status={status}
              handleDelete={handleDelete}
              handleMove={handleMove}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
