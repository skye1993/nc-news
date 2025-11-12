import { useState, useEffect } from "react";

function Comments({article_id}) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(null);


  function fetchComments() {
    fetch(
      `https://skye1993-be.onrender.com/api/articles/${article_id}/comments`
    )
      .then((response) => response.json())
      .then((comments) => {
        console.log(comments);
        setComments(comments.comments);
        setLoading(false);
       
      });
  }

  useEffect(() => {
    console.log("either startup or dependencies have changed");
    fetchComments();
  }, [article_id]);

  if (loading) {
    return <div>Loading Article comments...</div>;
  }
  if (isError) {
    return <p>We are having techniel diffucultes, please bear with us.</p>;
  }

  return (
      <ul>
        <h2>comments</h2>
        {comments.map((comment) => {
          console.log(comment);
          return (
            <div className="rectangle3">
              <p className="text">Author: {comment.author}</p>

              <p className="text"> {comment.body}</p>

              <p className="text">{comment.votes}</p>

               <p className="text">{comment.created_at}</p>
            </div>
          );
        })}
      </ul>
  );
}

export default Comments;
