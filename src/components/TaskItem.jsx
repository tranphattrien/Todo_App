import React, { useState } from "react";
import styles from "./TaskItem.module.css";
import { CheckIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

const TaskItem = ({ task, deleteTask, toggleTask, enterEditedMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };
  const handleUpdateTask = () => {
    enterEditedMode(task);
  };
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isChecked}
          name={task.name}
          id={task.id}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24}></CheckIcon>
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${task.name} Task`}
          onClick={handleUpdateTask}
        >
          <PencilSquareIcon
            strokeWidth={2}
            width={24}
            height={24}
          ></PencilSquareIcon>
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={handleDeleteTask}
        >
          <TrashIcon strokeWidth={2} width={24} height={24}></TrashIcon>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
