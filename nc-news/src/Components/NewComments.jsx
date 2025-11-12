import { useState } from "react";

function AddComment({ article_id, setArticleComments, userValue }) {
  const [newComment, setNewComment] = useState("");
  const [addButton, setAddButton] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://skye1993-be.onrender.com/api/articles/${article_id}/comments`,{
        method: 'post',
        body: JSON.stringify({body: newComment, username:user})
      }).then((newComment) => {
        setNewComment("");
        setArticleComments((currComments) => {
          const newCommentList = [...currComments];
          newCommentList.unshift(newComment);
          return newCommentList;
        });
        setAddButton(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setAddButton(false);
      });
  };

  return (
    <form
      className="comments-added"
      onSubmit={(event) => {
        handleSubmit(event.target.value);
        setError("");
      }}
    >
      <label htmlFor="newComment">
        <h2>Add your comment:</h2>
      </label>
      <br />
      <textarea
        key="newComment"
        value={newComment}
        onChange={(event) => {
          setNewComment(event.target.value);
          setError("");
        }}
        rows={5}
        required
      ></textarea>
      <br />
      <br />
      <h2>User : {userValue}</h2>
      <br />
      <br />
      <button
        key="add"
        onClick={(event) => {
          setAddButton(true);
          setNewComment(event.target.value);
        }}
      >
        <h3>Add</h3>
      </button>
    </form>
  );
}

export default AddComment;
