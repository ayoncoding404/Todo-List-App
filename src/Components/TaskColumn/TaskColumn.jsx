import { TbTargetArrow, TbCalendarClock } from "react-icons/tb";
import { MdTaskAlt } from "react-icons/md";

import styles from "./TaskColumn.module.css";
import TaskCard from "../TaskCard/TaskCard";

const TaskColumn = ({title, icon: Icon}) => {
    
  return (
    <section className="task_column">
      <h2 className={styles.task_column_heading}>
        <Icon className={styles.task_column_icon} /> {title}
      </h2>
     <TaskCard />
    </section>
  );
};

export default TaskColumn;
