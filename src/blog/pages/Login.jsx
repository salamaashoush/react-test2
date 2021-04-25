import { useNavigate } from "@reach/router";
import { useContext, useState } from "react";
import { TodoContext } from "../../todo-context";
import { login } from "../api";

export function Login() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(TodoContext);

  return (
    <div>
      <input
        placeholder="email"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={() => {
          login(userName).then((user) => {
            console.log(user);
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", JSON.stringify("true"));
            navigate("/dash");
          });
        }}
      >
        Login
      </button>
    </div>
  );
}
