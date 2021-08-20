import React from "react";
import styles from "../../styles/Todochildren.module.scss";
import { TodoChildren } from "../../types/todos";

export interface Props {
  TodoChild: any;
  updateStatusChildren: any;
}

const TodoChildrenData: React.FC<Props> = ({
  TodoChild,
  updateStatusChildren,
}) => {
  return (
    <div key={TodoChild?.id} className={styles.childrenContainer}>
      <input
        type="checkbox"
        checked={TodoChild?.status === "completed" ? true : false}
        onClick={() => updateStatusChildren(TodoChild.id, TodoChild.status)}
      />
      <h1>{TodoChild?.title}</h1>
    </div>
  );
};

export default TodoChildrenData;
