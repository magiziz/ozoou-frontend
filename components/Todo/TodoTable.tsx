import React from "react";
import styles from "../../styles/Todo.module.scss";
import TodoChildren from "../TodoChildren/TodoChildren";

const TodoTable = () => {
  return (
    <div className={styles.TodoTableContainer}>
      <TodoChildren />
      <TodoChildren />
    </div>
  );
};

export default TodoTable;
