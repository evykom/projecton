import { useState } from 'react';
import { articleAPI } from './api';

function AddArticleForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return alert('Please enter a title and content');
    await articleAPI.create(title, content);
    setTitle('');
    setContent('');
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Article</h2>
      <div>
        <label>Title:</label>
        <textarea value={title} onChange={(e) => setTitle(e.target.value)} rows="1" cols="30" />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} rows="5" cols="30" />
      </div>
      <button>Add Article</button>
    </form>
  );
}

export default AddArticleForm;







