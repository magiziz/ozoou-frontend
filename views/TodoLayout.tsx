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
  updateChildrenTodo,
} from "../api/todos";
import { Todo, TodoChildren } from "../types/todos";
import { AxiosResponse } from "axios";
import Loader from "react-loader-spinner";
import Modal from "../components/Modal/Modal";

const TodoLayout: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosChild, setTodosChild] = useState<TodoChildren[] | any>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [selectedId, setSelectedId] = useState<string | any>("");
  const [input, setInput] = useState<string>("");
  const [inputChildren, setInputChildren] = useState<string | any>("");
  const [modal, setModal] = useState<boolean | any>(false);
  const [createTodoValue, setCreateTodoValue] = useState<string | any>("");

  const getListData = async () => {
    const todoData: AxiosResponse = await getAllListTodos();
    setTodos(todoData.data);
  };

  const getAllChildrenTodosData = async () => {
    const todosChildrenData = await getAllChildrenTodos();
    setTodosChild(todosChildrenData.data);
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

    if (!inputChildren) {
      return null;
    } else {
      const createData = await createChildrenTodo(inputChildren, selectedId);

      if (createData) {
        await getListData();
        await getAllChildrenTodosData();
      }

      setInputChildren("");
    }
  };

  const updateStatusChildren = async (id: string, status: string) => {
    const updatedData = await updateChildrenTodo(id, status);

    if (updatedData) {
      setTodosChild(
        todosChild.map((todoChild: any) =>
          todoChild.id === id
            ? {
                ...todoChild,
                status: status === "pending" ? "completed" : "pending",
              }
            : todoChild
        )
      );
    }
  };

  const formSubmitCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!createTodoValue) {
      return null;
    } else {
      setLoading(true);
      await postTodo(createTodoValue);
      await getListData();
      setModal(false);
      setLoading(false);
    }
  };

  return (
    <div className={styles.todoOverlay}>
      {modal && (
        <Modal
          toggleModal={() => setModal(!modal)}
          inputValue={createTodoValue}
          setInputValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCreateTodoValue(e.target.value)
          }
          formSubmit={formSubmitCreateTodo}
        />
      )}
      <h1 className={styles.todoTitle}>JavaScript Test For OZZOU</h1>
      <Image src="/logo.png" width={250} height={250} />
      <div className={styles.todoInputAddContainer}>
        <input
          type="text"
          value={input}
          placeholder="Search for Todo List"
          onChange={onChange}
        />
        <button type="submit" onClick={() => setModal(true)}>
          Add New List
        </button>
      </div>
      {loading ? (
        <Loader type="Puff" color="#5B16FA" height={150} width={150} />
      ) : (
        <TodoTable
          SelectedId={selectedId}
          todos={todos}
          TodoChild={todosChild}
          setSelectedId={(id: string) => {
            setSelectedId(id);
          }}
          onSubmitUpdateTitleTodo={onSubmitUpdateTitleTodo}
          inputChildren={inputChildren}
          setInputChildren={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputChildren(e.target.value)
          }
          InputSearchValue={input}
          createChildrenTodoOnSubmit={createChildrenTodoOnSubmit}
          updateStatusChildren={updateStatusChildren}
        />
      )}
    </div>
  );
};

export default TodoLayout;
