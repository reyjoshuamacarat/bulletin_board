import ArticleCard from "../components/ArticleCard";
import { getArticles } from "../data";
import { useNavigate } from "react-router-dom";

export default function TopScreen() {
  const articleData = getArticles();
  let navigate = useNavigate();

  function onClick() {
    navigate("../edit");
  }
  return (
    <div>
      <div className="App">
        {articleData.length ? articleData.map((article) => <ArticleCard {...article} />) : null}
      </div>
      <button type="submit" onClick={onClick}>
        Create New Article
      </button>
    </div>
  );
}
