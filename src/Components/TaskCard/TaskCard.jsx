import styles from './TaskCard.module.css'
import { GoTrash } from "react-icons/go";

const TaskCard = ({title, handleDelete, index}) => {
  return (
    <article className={styles.task_card}>
        <p className={styles.task_text}>
             {title}
        </p>
        <div className={styles.task_card_bottom}>
              <div className={styles.task_description}>Description</div>
              <button onClick={()=>handleDelete(index)} className={styles.task_delete}><GoTrash /></button>  
        </div>
    </article>
  )
}

export default TaskCard