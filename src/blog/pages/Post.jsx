import { Link, useParams } from "@reach/router";
import { useQuery } from "react-query";
import { getPost } from "../api";
import { usePost } from "../hooks/blog";

export function Post() {
  console.log("asdsad");
  const params = useParams();
  const { data, isLoading } = useQuery(["fetch", params.postId], () =>
    getPost(params.postId)
  );
  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <div>{data && <p>{data.body}</p>}</div>
  );
}
