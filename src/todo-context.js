import { createContext } from "react";
export const TodoContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: null,
  user: null,
  todos: [],
  loading: true,
  handleAdd: null,
  handleComplete: null,
  handleDelete: null,
});
