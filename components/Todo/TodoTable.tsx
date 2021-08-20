import React from "react";
import styles from "../../styles/Todo.module.scss";
import { Todo } from "../../types/todos";
import TodoChildren from "../TodoChildren/TodoChildren";
import Todos from "./Todos";

interface Props {
  todos: Todo[];
  TodoChild: any;
  SelectedId: any;
  setSelectedId: any;
  onSubmitUpdateTitleTodo: any;
  setInputChildren: any;
  inputChildren: any;
  createChildrenTodoOnSubmit: any;
  updateStatusChildren: any;
}

const TodoTable: React.FC<Props> = ({
  todos,
  TodoChild,
  SelectedId,
  setSelectedId,
  onSubmitUpdateTitleTodo,
  setInputChildren,
  inputChildren,
  createChildrenTodoOnSubmit,
  updateStatusChildren,
}) => {
  return (
    <div className={styles.TodoTableContainer}>
      {todos.map((todo: Todo) => (
        <Todos
          selectedId={SelectedId}
          todos={todo}
          TodoChild={TodoChild}
          setSelectedId={setSelectedId}
          onSubmitUpdateTitleTodo={onSubmitUpdateTitleTodo}
          setInputChildren={setInputChildren}
          inputChildren={inputChildren}
          createChildrenTodoOnSubmit={createChildrenTodoOnSubmit}
          updateStatusChildren={updateStatusChildren}
        />
      ))}
    </div>
  );
};

export default TodoTable;
