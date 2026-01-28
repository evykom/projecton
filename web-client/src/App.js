import { useState } from 'react';
import { articleAPI } from './api';
import ArticleList from './ArticleList';
import AddArticleForm from './AddArticleForm';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  const loadArticles = async () => {
      setArticles(await articleAPI.getAll());
  };


  return (
    <div className="container">
      <h1>Article Manager</h1>
      <AddArticleForm onSave={loadArticles} />
      <ArticleList articles={articles} onDelete={loadArticles} />
    </div>
  );
}

export default App;





