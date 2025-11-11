import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  function fetchArticles() {
    fetch("https://skye1993-be.onrender.com/api/articles")
      .then((response) => response.json())
      .then((articles) => {
        setArticles(articles.articles);
        setLoading(false);
        console.log(articles.articles);
      });
  }

  useEffect(() => {
    console.log("either startup or dependencies have changed");
    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading Articles...</div>;
  }
  if (isError) {
    return <p>We are having techniel diffucultes, please bear with us.</p>;
  }

  return (
    <>
    <Header />
      <ul>
        {articles.map((article) => {
          console.log(article);
          return (
            <Link to={`/article/${article.article_id}`}> <div className="rectangle">Article:
            <br/>
              <li key={article.title}>{article.title}</li>
             <br/>
              <p key={article.author}>Author:{article.author}</p></div>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default AllArticles;
