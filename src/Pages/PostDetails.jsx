
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
    return <p>Loading post...</p>;
  }

  if (error) {
    return (
      <main>
        <p>{error}</p>
        <Link to="/post">Back to posts</Link>
      </main>
    );
  }

  return (
    <main>
      <Link to="/post"> Back to posts</Link>

      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>

      <section>
        <h2>Comments ({comments.length})</h2>

        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </section>
    </main>
  );
}

export default PostDetails;
