'use client';

import { useEffect, useState } from 'react';

export default function PostsList() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from API on client side
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 5)); // just show first 5
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
