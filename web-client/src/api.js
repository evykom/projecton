const API_URL = 'http://localhost:30000/articles';

export const articleAPI = {
  getAll: async () => {
    const response = await fetch(API_URL);
    return response.json();
  },

  create: async (title, content) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    return response.json();
  },
};
