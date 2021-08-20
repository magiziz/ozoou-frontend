import axiosInstance from "./axios";

export const getAllListTodos = () =>
  axiosInstance
    .get("/todo/getListOfTodos")
    .then((res) => res.data)
    .catch((err) => err);

export const postTodo = (title: string) =>
  axiosInstance
    .post("/todo/createTodo", { title })
    .then((res) => res.data)
    .catch((err) => err);

export const editTodo = (status: string, id: string) =>
  axiosInstance
    .put("/todo/updateTodoStatus", { status, id })
    .then((res) => res.data)
    .catch((err) => err);

export const getAllChildrenTodos = () =>
  axiosInstance
    .get("/todoChildren/getListOfChildrenTodos")
    .then((res) => res.data)
    .catch((err) => err);

export const createChildrenTodo = (title: string, todoId: string) =>
  axiosInstance
    .post("/todoChildren/createTodoChildren", { title, todoId })
    .then((res) => res.data)
    .catch((err) => err);
