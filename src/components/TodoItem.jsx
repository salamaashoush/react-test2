export function TodoItem({ item, handleDelete, handleComplete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleComplete(item)}
      />
      {item.title}
      <button onClick={() => handleDelete(item)}>Delete</button>
    </li>
  );
}
