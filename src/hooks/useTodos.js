import { useCallback, useEffect, useState, useMemo } from "react";

export function useTodos(initialTodos) {
  let [todos, setTodos] = useState(initialTodos);
  const [loading, setLoading] = useState(true);

  const handleDelete = useCallback(
    (item) => {
      setTodos(todos.filter(({ id }) => id !== item.id));
    },
    [todos, setTodos]
  );

  const handleAdd = useCallback(
    (value) =>
      setTodos([...todos, { id: Date.now(), title: value, completed: false }]),
    [todos, setTodos]
  );

  const handleComplete = useCallback(
    (todoItem) =>
      setTodos(
        todos.map((todo) =>
          todo.id === todoItem.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      ),
    [todos, setTodos]
  );

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, [setTodos, setLoading]);

  const value = useMemo(
    () => ({
      loading,
      handleAdd,
      handleComplete,
      handleDelete,
      todos,
      setTodos,
    }),
    [loading, handleAdd, handleComplete, handleDelete, todos, setTodos]
  );
  return value;
}
