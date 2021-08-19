import React from "react";
import styles from "../../styles/Todochildren.module.scss";
import { FiChevronDown } from "react-icons/fi";
import moment from "moment";
import TodoChildren from "../TodoChildren/TodoChildren";

const Todos = ({ todos, TodoChild, setEdit, selectedId }: any) => {
  const renderChildTodos = () => {
    TodoChild?.map(
      (todoChildren: any) =>
        todoChildren.todo_id === TodoChild.id && (
          <TodoChildren TodoChild={todoChildren} />
        )
    );
  };

  return (
    <div key={todos.id} className={styles.Todoparent}>
      <div className={styles.TodoparentCheckTotal}>
        <div className={styles.TodoparentCheckTotalCheck}>
          <input type="checkbox" checked={true} />
          <h1>{todos.title}</h1>
        </div>

        <div className={styles.TododparentEditTime}>
          <div className={styles.TododparentEdit}>
            <button onClick={() => setEdit(todos.id)}>Edit</button>
            <span>
              {moment(new Date(todos.created_at).toUTCString())
                .startOf("hour")
                .fromNow()}
            </span>
          </div>

          <p className={styles.completedTaskButton}>
            3 of 5 completed{" "}
            <button onClick={() => setEdit(todos.id)}>
              Collapse&nbsp; <FiChevronDown />{" "}
            </button>{" "}
          </p>
        </div>
      </div>
      {selectedId === todos.id && (
        <div className={styles.TododparentChildren}>
          {renderChildTodos()}
          <div>
            <input type="text" placeholder={`Add a task to ${todos.title}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
