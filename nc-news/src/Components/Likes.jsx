import { useEffect, useState } from "react";

const Likes = ({ article_id }) => {
  const [likes, setLikes] = useState(0);
  const [likeButton, setLikeButton] = useState(false);

 

  useEffect(() => {
    fetch(`https://skye1993-be.onrender.com/api/articles/${article_id}`)
    .then((response) => response.json())
    .then((articles) => {
        console.log(articles)
        setLikes(articles.votes);
     
      }
    );
  }, [article_id]);

  const handleVote = (article_id) => {
    setLikes((likes) => {
      return likes + 1;
    });

    fetch(
      `http://https://skye1993-be.onrender.com/api/articles/${article_id},patchArticleVotes`
    ).catch((err) => {
      console.log(err.response);
      setLikes((likes) => {
        return likes - 1;
      });
    });
  };

  return (
    <button
      key="likes-button"
      onClick={() => {
        handleVote(article_id);
        setLikeButton(true);
      }}
      disabled={likeButton === true ? true : false}
    >
      <span aria-label="votes for this article">❤️</span> {likes}
    </button>
  );
};

export default Likes;
