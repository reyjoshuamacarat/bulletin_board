import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import TopScreen from "./screens/TopScreen";
import ArticleDetailScreen from "./screens/ArticleDetailScreen";
import EditArticleScreen from "./screens/EditArticleScreen";
import ArticleScreen from "./screens/ArticleScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/article">Article</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path="/" element={<TopScreen />} />
          <Route path="/article" element={<ArticleScreen />} />
          <Route path="/edit" element={<EditArticleScreen />} />
          <Route path="/article/:id" element={<ArticleDetailScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
