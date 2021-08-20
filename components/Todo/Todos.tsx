import React from "react";
import styles from "../../styles/Todochildren.module.scss";
import { FiChevronDown } from "react-icons/fi";
import moment from "moment";
import TodoChildren from "../TodoChildren/TodoChildren";

const Todos = ({
  todos,
  TodoChild,
  selectedId,
  setSelectedId,
  onSubmitUpdateTitleTodo,
  setInputChildren,
  inputChildren,
  createChildrenTodoOnSubmit,
  updateStatusChildren,
}: any) => {
  return (
    <div key={todos.id} className={styles.Todoparent}>
      <div className={styles.TodoparentCheckTotal}>
        <form className={styles.TodoparentCheckTotalCheck}>
          <input
            type="checkbox"
            checked={todos.status === "completed" ? true : false}
            onClick={() => {
              onSubmitUpdateTitleTodo(todos.status, todos.id);
              setSelectedId(todos.id);
            }}
          />
          <h1>{todos.title}</h1>
        </form>

        <div className={styles.TododparentEditTime}>
          <div className={styles.TododparentEdit}>
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
      {selectedId === todos.id && (
        <div className={styles.TododparentChildren}>
          {Object.entries(TodoChild).map((key: any, index) =>
            key[1].todo_id === todos.id ? (
              <TodoChildren
                TodoChild={key[1]}
                updateStatusChildren={updateStatusChildren}
              />
            ) : (
              <></>
            )
          )}
          <form
            onSubmit={createChildrenTodoOnSubmit}
            className={styles.TodoparentChildrenSubmitInput}
          >
            <input
              type="text"
              placeholder={`Add a task to ${todos.title}`}
              value={inputChildren}
              onChange={setInputChildren}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Todos;
