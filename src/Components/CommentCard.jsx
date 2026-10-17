
function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <h3>{comment.name}</h3>
      <p className="comment-email">{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
}

export default CommentCard;
