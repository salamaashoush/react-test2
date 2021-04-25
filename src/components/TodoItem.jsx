import { useContext } from "react";
import { TodoContext } from "../todo-context";

export function TodoItem({ item }) {
  const todoService = useContext(TodoContext);
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => todoService.handleComplete(item)}
      />
      {item.title}
      <button onClick={() => todoService.handleDelete(item)}>Delete</button>
    </li>
  );
}
