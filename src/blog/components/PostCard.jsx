import "./PostCard.css";
export function PostCard({ title, body, onViewClick }) {
  return (
    <div className="post-card">
      <p>{title}</p>
      <button onClick={() => onViewClick()}>View</button>
    </div>
  );
}
