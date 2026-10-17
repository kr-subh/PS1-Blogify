import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentCard from '../Components/CommentCard';

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    ])
      .then(([postRes, commentRes]) => {
        if (!postRes.ok || !commentRes.ok) {
          throw new Error('Failed to load post');
        }

        return Promise.all([postRes.json(), commentRes.json()]);
      })
      .then(([postData, commentData]) => {
        if (!postData.id) {
          throw new Error('Post not found');
        }

        setPost(postData);
        setComments(commentData);
      })
      .catch(() => setError('Unable to load this post.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="loading-text">Loading post...</p>;
  }

  if (error) {
    return (
      <main className="details-container">
        <p className="error-text">{error}</p>
        <Link to="/post" className="back-link">← Back to posts</Link>
      </main>
    );
  }

  return (
    <main className="details-container">
      <Link to="/post" className="back-link">← Back to posts</Link>

      <article className="post-article">
        <span className="post-badge">Post #{post.id}</span>
        <h1>{post.title}</h1>
        <p className="post-body">{post.body}</p>
      </article>

      <section className="comments-section">
        <h2>Comments ({comments.length})</h2>

        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))
          ) : (
            <p>No comments available.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default PostDetails;
