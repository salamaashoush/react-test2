import { Header } from "../components/Header";

export function Dashboard({ children, userId }) {
  return (
    <div>
      <Header userId={userId} />
      {children}
    </div>
  );
}
