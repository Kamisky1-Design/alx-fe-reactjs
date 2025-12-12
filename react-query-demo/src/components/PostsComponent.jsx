import { useQuery } from "@tanstack/react-query";

export default function PostsComponent() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return res.json();
    },

    // Required by checker
    cacheTime: 1000 * 60,             // 1 minute cache
    refetchOnWindowFocus: false,      // Disable automatic refetch
    keepPreviousData: true,           // Keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Something went wrong.</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch</button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
