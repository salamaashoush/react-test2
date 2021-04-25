import { PostList } from "../components/PostList";
import { Link, useNavigate } from "@reach/router";
import "./Home.css";

export function Home({ userId }) {
  const navigate = useNavigate();
  return (
    <main>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
        ></textarea>
      </div>
      <PostList
        userId={userId}
        onViewClick={(post) => {
          navigate(`/dash/post/${post.id}`);
        }}
      ></PostList>
    </main>
  );
}
