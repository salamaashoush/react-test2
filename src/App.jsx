import { Card } from "./components/Card";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
// import {}
function App() {
  const { handleAdd, handleDelete, handleComplete, todos, loading } = useTodos([
    { id: 1, title: "first todo", completed: true },
    { id: 2, title: "second todo", completed: true },
  ]);
  return (
    <div>
      <Card title="Hello react">
        <TodoInput handleAdd={handleAdd} />
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        )}
      </Card>
    </div>
  );
}

export default App;
