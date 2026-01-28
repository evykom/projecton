import { articleAPI } from './api';

function ArticleList({ articles, onDelete }) {
  const handleDelete = async (id) => {
    await articleAPI.delete(id);
    onDelete();
  };

  return (
    <>
      <h2>Articles</h2>
      {articles.map((article) => (
        <div key={article._id} className="article-card">
          <div className="article-header">
            <h3>{article.title}</h3>
            <button onClick={() => handleDelete(article._id)}>×</button>
          </div>
          <p>{article.content}</p>
        </div>
      ))}
    </>
  );
}

export default ArticleList;
