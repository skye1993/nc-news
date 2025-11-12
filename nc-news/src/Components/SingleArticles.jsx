import { useState, useEffect } from "react";
import imgAuthor from "../assets/author.jpeg";
import Comments from "./Comments";
import Likes from "./Likes";
import { useParams } from "react-router-dom";

function SingleArticles() {
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [article_img_url, setImg] = useState();
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(null);
  const { article_id } = useParams();
  console.log(article_id);

  useEffect(() => {
    fetch(`https://skye1993-be.onrender.com/api/articles/${article_id}`)
      .then((response) => response.json())
      .then((articles) => {
        console.log(articles);
        setTopic(articles.article.topic);
        setAuthor(articles.article.author);
        setBody(articles.article.body);
        setImg(articles.article.article_img_url);

        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <div>Loading Article...</div>;
  }
  if (isError) {
    return <p>We are having techniel diffucultes, please bear with us.</p>;
  }

  return (
    <>
      <div className="rectangle2">
        <p>
          <img className="author-icon" src={imgAuthor} /> By: {author}
        </p>
        <br />
        <h1>Topic: {topic}</h1>
        <br />
        <p className="body">{body}</p>
        <img src={article_img_url}></img>
        <div id="like-article">
            <h2>Liked this article?</h2>
        <Likes article_id={article_id}/>
        </div>
      </div>
      <Comments article_id={article_id} />
    </>
  );
}

export default SingleArticles;
