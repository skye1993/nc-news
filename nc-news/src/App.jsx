import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllArticles from "./Components/Articles";
import SingleArticles from "./Components/SingleArticles"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<AllArticles />} />
        <Route path="/article/:article_id" element={<SingleArticles />} />
      </Routes>
    </>
  );
}

export default App;
