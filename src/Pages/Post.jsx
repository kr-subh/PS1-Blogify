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
    return <p className="loading-text">Loading posts...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  return (
    <main className="posts-container">
      <div className="posts-header">
        <h1>Explore Posts</h1>
        <p>Find a story that interests you.</p>

        <input
          type="text"
          placeholder="Search posts by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="posts-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <p className="no-posts">No posts found.</p>
        )}
      </div>
    </main>
  );
}

export default Post;
