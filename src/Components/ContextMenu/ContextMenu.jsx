import styles from "./ContextMenu.module.css";

const ContextMenu = ({ position, show, status, onMove }) => {
  if (!show) {
    return null;
  }

  const options = {
    new: ["ongoing", "done"],
    ongoing: ["new", "done"],
    done: ["new", "ongoing"],
  };

  return (
    <ul
      className={styles.contextMenu}
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      {options[status].map((option) => (
        <li key={option} onClick={() => onMove(option)}>
          Move to {option.charAt(0).toUpperCase() + option.slice(1)}
        </li>
      ))}
    </ul>
  );
};

export default ContextMenu;
