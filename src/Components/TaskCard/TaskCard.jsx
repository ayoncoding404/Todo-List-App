import styles from './TaskCard.module.css'
import { GoTrash } from "react-icons/go";

const TaskCard = () => {
  return (
    <article className={styles.task_card}>
        <p className={task_text}>
             This is Sample Text
        </p>
        <div className={styles.task_card_bottom}>
              <div className={styles.task_description}>Description</div>
              <div className={styles.task_delete}><GoTrash/></div>  
        </div>
    </article>
  )
}

export default TaskCard