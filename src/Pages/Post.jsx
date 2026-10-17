import { useEffect, useState } from 'react';
import PostCard from '../Components/PostCard';

function Post() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load posts');
        }
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch(() => setError('Unable to load posts.'))
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Explore Posts</h1>
      <p>Find a story that interests you.</p>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </main>
  );
}

export default Post;
