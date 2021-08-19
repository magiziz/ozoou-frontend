import React from "react";
import styles from "../../styles/Todo.module.scss";
import { Todo } from "../../types/todos";
import TodoChildren from "../TodoChildren/TodoChildren";
import Todos from "./Todos";

interface Props {
  todos: Todo[];
  setEditTitle: any;
  TodoChild: any;
  SelectedId: any;
  setSelectedId: any;
  editTitle: any | Boolean;
}

const TodoTable: React.FC<Props> = ({
  todos,
  setEditTitle,
  TodoChild,
  SelectedId,
  setSelectedId,
  editTitle,
}) => {
  return (
    <div className={styles.TodoTableContainer}>
      {todos.map((todo: Todo) => (
        <Todos
          selectedId={SelectedId}
          todos={todo}
          setEditTitle={setEditTitle}
          TodoChild={TodoChild}
          setSelectedId={setSelectedId}
          editTitle={editTitle}
        />
      ))}
    </div>
  );
};

export default TodoTable;
