import { Redirect } from "@reach/router";
import { useContext } from "react";
import { TodoContext } from "../../todo-context";

export function ProtectedPage({ children }) {
  const { isLoggedIn } = useContext(TodoContext);
  if (isLoggedIn) {
    return <>{children}</>;
  }
  return <Redirect to="/login" noThrow />;
}
