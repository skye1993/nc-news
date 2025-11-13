import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Topics from "./Topics";


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
    <Topics/>
      <ul>
        {articles.map((article) => {
          console.log(article);
          return (
           
            <Link to={`/article/${article.article_id}`}> <div className="rectangle">Article:
           
              <li className="text">{article.title}</li>
            
              <li className="text">Author: {article.author}</li>
            
            <li className="text">Comments: {article.comment_count}</li></div>
            </Link>
          
    //      
          );
        })}
      </ul>
    </>
  );
}

export default AllArticles;
