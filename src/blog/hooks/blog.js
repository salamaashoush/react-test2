import { useEffect, useState } from "react";
import { getPost, getUser, getUserPosts } from "../api";

export function useUserPosts(userId) {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getUserPosts(userId).then((posts) => {
      setPosts(posts);
      setIsLoading(true);
    });
  }, [userId]);

  return {
    posts,
    isLoading,
  };
}

export function useUser(userId) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getUser(userId).then((user) => {
      setUser(user);
      setIsLoading(true);
    });
  }, [userId]);

  return {
    user,
    isLoading,
  };
}

export function usePost(postId) {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getPost(postId).then((post) => {
      setPost(post);
      setIsLoading(false);
    });
  }, [postId]);

  return {
    post,
    isLoading,
  };
}
