import { useContext, useEffect, useRef, useState } from "react";
import { TodoContext } from "../todo-context";

export function TodoInput({}) {
  const [value, setValue] = useState("");
  const todoService = useContext(TodoContext);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() => {
          todoService.handleAdd(value);
          setValue("");
        }}
      >
        Add todo
      </button>
    </div>
  );
}
