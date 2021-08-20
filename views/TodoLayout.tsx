import styles from "../styles/Todo.module.scss";
import Image from "next/image";
import TodoTable from "../components/Todo/TodoTable";
import React, { EffectCallback, useEffect, useState } from "react";
import {
  createChildrenTodo,
  editTodo,
  getAllChildrenTodos,
  getAllListTodos,
  postTodo,
} from "../api/todos";
import { Todo, TodoChildren } from "../types/todos";
import { AxiosResponse } from "axios";
import Loader from "react-loader-spinner";

const TodoLayout: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosChild, setTodosChild] = useState<TodoChildren[] | any>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [selectedId, setSelectedId] = useState<string | any>("");
  const [input, setInput] = useState<string>("");
  const [inputChildren, setInputChildren] = useState<string | any>("");

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
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const updateTodoTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await postTodo(input);
    setLoading(false);
  };

  const onSubmitUpdateTitleTodo = async (status: string, id: string) => {
    await editTodo(status, id);
    setTodos(
      todos.map((todos: any) =>
        todos.id === id
          ? { ...todos, status: status === "pending" ? "completed" : "pending" }
          : todos
      )
    );
  };

  const createChildrenTodoOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const createData = await createChildrenTodo(inputChildren, selectedId);

    if (createData) {
      await getListData();
      await getAllChildrenTodosData();
    }

    setInputChildren("");
  };

  const updateStatusChildren = (id: string) => {
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
          SelectedId={selectedId}
          todos={todos}
          TodoChild={todosChild.data}
          setSelectedId={(id: string) => {
            setSelectedId(id);
          }}
          onSubmitUpdateTitleTodo={onSubmitUpdateTitleTodo}
          inputChildren={inputChildren}
          setInputChildren={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputChildren(e.target.value)
          }
          createChildrenTodoOnSubmit={createChildrenTodoOnSubmit}
          updateStatusChildren={updateStatusChildren}
        />
      )}
    </div>
  );
};

export default TodoLayout;
