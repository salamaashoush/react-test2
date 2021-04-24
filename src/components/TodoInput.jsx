import { useState } from "react";

export function TodoInput({ handleAdd }) {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() => {
          handleAdd(value);
          setValue("");
        }}
      >
        Add todo
      </button>
    </div>
  );
}
