import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";
const TaskList = ({ tasks, deleteTask, toggleTask, enterEditedMode }) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              enterEditedMode={enterEditedMode}
            />
          );
        })}
    </ul>
  );
};

export default TaskList;
