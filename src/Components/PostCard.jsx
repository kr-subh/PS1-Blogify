
function CommentCard(props) {
  return (
    <div className="comment-card">
      <h3>{props.comment.name}</h3>
      <p>{props.comment.email}</p>
      <p>{props.comment.body}</p>
    </div>
  );
}

export default CommentCard;
