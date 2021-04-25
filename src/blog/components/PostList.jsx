import { useUserPosts } from "../hooks/blog";
import { PostCard } from "./PostCard";
import "./PostList.css";

export function PostList({ userId, onViewClick }) {
  const { posts } = useUserPosts(userId);
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          title={post.title}
          body={post.body}
          key={post.id}
          onViewClick={() => onViewClick(post)}
        />
      ))}
    </div>
  );
}
