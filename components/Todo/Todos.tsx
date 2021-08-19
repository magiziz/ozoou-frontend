import React from "react";
import styles from "../../styles/Todochildren.module.scss";
import { FiChevronDown } from "react-icons/fi";
import moment from "moment";
import TodoChildren from "../TodoChildren/TodoChildren";

const Todos = ({
  todos,
  TodoChild,
  setEditTitle,
  editTitle,
  selectedId,
  setSelectedId,
}: any) => {
  return (
    <div key={todos.id} className={styles.Todoparent}>
      <div className={styles.TodoparentCheckTotal}>
        <div className={styles.TodoparentCheckTotalCheck}>
          <input type="checkbox" checked={true} />

          {editTitle && selectedId === todos.id ? (
            <input
              type="text"
              placeholder="Edit your text"
              className={styles.TodoparentEditInput}
            />
          ) : (
            <h1>{todos.title}</h1>
          )}
        </div>

        <div className={styles.TododparentEditTime}>
          <div className={styles.TododparentEdit}>
            <button onClick={() => setEditTitle(todos.id, true)}>Edit</button>
            <span>
              {moment(new Date(todos.created_at).toUTCString())
                .startOf("hour")
                .fromNow()}
            </span>
          </div>

          <p className={styles.completedTaskButton}>
            3 of 5 completed{" "}
            <button onClick={() => setSelectedId(todos.id)}>
              Collapse&nbsp; <FiChevronDown />{" "}
            </button>{" "}
          </p>
        </div>
      </div>
      {selectedId === todos.id && !editTitle && (
        <div className={styles.TododparentChildren}>
          {TodoChild?.map(
            (todoChildren: any) =>
              todoChildren.todo_id === TodoChild.id && (
                <TodoChildren TodoChild={todoChildren} />
              )
          )}
          <div className={styles.TodoparentChildrenSubmitInput}>
            <input type="text" placeholder={`Add a task to ${todos.title}`} />
            <button>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
