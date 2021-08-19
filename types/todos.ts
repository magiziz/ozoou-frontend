import { Key } from "react";

export interface Todo {
  id: Key | any;
  title: String;
  status: String;
  created_at: String;
}

export interface TodoChildren {
  id: Key | any;
  title: String;
  status: String;
  todo_id: String;
  created_at: String;
}
