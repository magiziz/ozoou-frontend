import React from "react";
import styles from "../../styles/Todo.module.scss";
import { Todo } from "../../types/todos";
import TodoChildren from "../TodoChildren/TodoChildren";
import Todos from "./Todos";

interface Props {
  todos: Todo[];
  setEdit: any;
  TodoChild: any;
}

const TodoTable: React.FC<Props> = ({ todos, setEdit, TodoChild }) => {
  return (
    <div className={styles.TodoTableContainer}>
      {todos.map((todo: Todo) => (
        <Todos todos={todo} setEdit={setEdit} TodoChild={TodoChild} />
      ))}
    </div>
  );
};

export default TodoTable;
