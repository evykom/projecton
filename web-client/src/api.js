const API_URL = 'http://localhost:30000/articles';

export const articleAPI = {
    getAll: async ()=> {return (await fetch(API_URL)).json()},

    create: async (title,content)=> {
        return (await fetch(API_URL,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content })})).json()},

    delete: async (id)=> {return (await fetch(`${API_URL}/${id}`, { method: 'DELETE' })).json()}
    }