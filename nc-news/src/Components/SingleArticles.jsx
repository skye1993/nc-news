import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import imgAuthor from '../assets/author.jpeg'
import thumbsUp from '../assets/thumbs-up.png'
import thumbsDown from '../assets/thumb-down.png'
// import index from '../assets/index.css'


function SingleArticles(){
  const[topic, setTopic]= useState('')
  const[author, setAuthor]= useState('')
  const[body, setBody]= useState('')
  const[votes, setVotes]= useState('')
  const[article_img_url, setImg]= useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  console.log(article_id)

  useEffect(() => {
    fetch(`https://skye1993-be.onrender.com/api/articles/${article_id}`)
      .then((response) => response.json())
      .then((articles) => {
        console.log(articles)
        setTopic(articles.article.topic)
        setAuthor(articles.article.author)
        setBody(articles.article.body)
        setVotes(articles.article.votes)
        setImg(articles.article.article_img_url)

        setLoading(false)
  });
  }, [article_id]);

  return (

      <div className="rectangle2">
            <p classNmae='author-move'> <img className="author-icon" src={imgAuthor}/> By: {author}</p>
            <br/>
            <h1>Topic: {topic}</h1>
             <br/>
            <p className='body'>{body}</p>
            <img src={article_img_url}></img>
            <p><img className="votes-resize" src={thumbsUp} />{votes} <img className="votes-resize" src={thumbsDown} /></p>
      </div>
      
         )
        }

export default SingleArticles