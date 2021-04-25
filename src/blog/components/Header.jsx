import { useUser } from "../hooks/blog";
import "./Header.css";
export function Header({ userId }) {
  const { user } = useUser(userId);
  return (
    <header className="header">
      <h1>Blog</h1>
      {user && <p>{user.name}</p>}
    </header>
  );
}
