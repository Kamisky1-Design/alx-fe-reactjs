import { useQuery } from "@tanstack/react-query";

export default function PostsComponent() {
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  };

  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 minute cache
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p>Error loading posts: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: "10px" }}>
        Refetch Posts
      </button>

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "8px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
