import { TodoItem } from "./TodoItem";
// vdom

export function TodoList({ todos, handleDelete, handleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          item={todo}
          handleDelete={handleDelete}
          key={todo.id}
          handleComplete={handleComplete}
        />
      ))}
    </ul>
  );
}
