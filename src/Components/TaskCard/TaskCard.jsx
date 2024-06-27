import styles from "./TaskCard.module.css";
import { GoTrash } from "react-icons/go";
import ContextMenu from "../ContextMenu/ContextMenu";
import { useState } from "react";

const StatusColorMap = {
  todo: "#0a19a3",
  doing: "#d98507",
  done: "#007d04",
};

const StatusTextMap = {
  todo: "New",
  doing: "On Going",
  done: "Done",
};

const TaskCard = ({
  title,
  dueDate,
  description,
  handleDelete,
  index,
  status,
  handleMove,
}) => {
  const [contextMenu, setContextMenu] = useState({
    show: false,
    position: { x: 0, y: 0 },
  });

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({
      show: true,
      position: { x: event.pageX, y: event.pageY },
    });
  };

  const handleMoveTask = (newStatus) => {
    handleMove(index, newStatus);
    setContextMenu({ show: false, position: { x: 0, y: 0 } });
  };

  const handleClick = () => {
    setContextMenu({ show: false, position: { x: 0, y: 0 } });
  };

  return (
    <div onContextMenu={handleContextMenu} onClick={handleClick}>
      <article className={styles.task_card}>
        <div className={styles.task_text}>
          {title}{" "}
          <div style={{ color: StatusColorMap[status], fontSize: " 12px" }}>
            {StatusTextMap[status]}
          </div>
        </div>
        <div className={styles.task_card_bottom}>
          <div className={styles.task_description}>{description}</div>
          <button
            onClick={() => handleDelete(index)}
            className={styles.task_delete}
          >
            <GoTrash />
          </button>
        </div>
        {!!dueDate && (
          <div className={styles.task_date}>
            Due date:
            <p>{new Date(dueDate).toDateString()}</p>
          </div>
        )}
      </article>
      <ContextMenu
        position={contextMenu.position}
        show={contextMenu.show}
        status={status}
        onMove={handleMoveTask}
      />
    </div>
  );
};

export default TaskCard;
