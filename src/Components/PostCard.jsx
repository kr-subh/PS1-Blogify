import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <span className="post-number">Post #{post.id}</span>
      <h2>{post.title}</h2>
      <p>{post.body.slice(0, 85)}...</p>
      <Link to={`/posts/${post.id}`} className="read-link">
        Read full post →
      </Link>
    </div>
  );
}

export default PostCard;
