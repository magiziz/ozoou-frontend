import React from "react";
import styles from "../../styles/Todochildren.module.scss";
import { TodoChildren } from "../../types/todos";

export interface Props {
  TodoChild: any;
}

const TodoChildrenData: React.FC<Props> = ({ TodoChild }) => {
  return (
    <div key={TodoChild?.id} className={styles.childrenContainer}>
      <input type="checkbox" checked />
      <h1>{TodoChild?.title}</h1>
    </div>
  );
};

export default TodoChildrenData;
