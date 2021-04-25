import { TodoItem } from "./TodoItem";
// vdom

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem item={todo} key={todo.id} />
      ))}
    </ul>
  );
}
