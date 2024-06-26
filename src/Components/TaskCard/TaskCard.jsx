import styles from './TaskCard.module.css'
import { GoTrash } from "react-icons/go";

const TaskCard = () => {
  return (
    <article className={styles.task_card}>
        <p className={styles.task_text}>
             This is Sample Text
        </p>
        <div className={styles.task_card_bottom}>
              <div className={styles.task_description}>Description</div>
              <button className={styles.task_delete}><GoTrash /></button>  
        </div>
    </article>
  )
}

export default TaskCard