import styles from "../styles/Todo.module.scss";
import Image from "next/image";
import TodoTable from "../components/Todo/TodoTable";
import React, { EffectCallback, useEffect, useState } from "react";
import { getAllChildrenTodos, getAllListTodos, postTodo } from "../api/todos";
import { Todo, TodoChildren } from "../types/todos";
import { AxiosResponse } from "axios";
import Loader from "react-loader-spinner";

const TodoLayout: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosChild, setTodosChild] = useState<TodoChildren[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [input, setInput] = useState<string>("");

  const getListData = async () => {
    const todoData: AxiosResponse = await getAllListTodos();
    setTodos(todoData.data);
  };

  const getAllChildrenTodosData = async () => {
    const todosChildrenData = await getAllChildrenTodos();
    setTodosChild(todosChildrenData);
  };

  useEffect(() => {
    setLoading(true);

    (async () => {
      await getListData();
      await getAllChildrenTodosData();
    })();

    setLoading(false);
  }, [todos]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const updateTodoTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await postTodo(input);
    setLoading(false);
  };

  const setEdit = (id: string) => {
    alert(id);
  };

  return (
    <div className={styles.todoOverlay}>
      <h1 className={styles.todoTitle}>JavaScript Test For OZZOU</h1>
      <Image src="/logo.png" width={250} height={250} />
      <form onSubmit={updateTodoTask} className={styles.todoInputAddContainer}>
        <input
          type="text"
          value={input}
          placeholder="Search for Todo List"
          onChange={onChange}
        />
        <button type="submit">Add New List</button>
      </form>
      {loading ? (
        <Loader type="Puff" color="#5B16FA" height={150} width={150} />
      ) : (
        <TodoTable
          todos={todos}
          setEdit={setEdit}
          TodoChild={todosChild.data}
        />
      )}
    </div>
  );
};

export default TodoLayout;
