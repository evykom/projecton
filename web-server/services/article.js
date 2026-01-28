const Article = require('../models/article')

const GetAll = async () =>{return await Article.find({});};

const GetByID = async (id) => { return await Article.findById(id)};

const createArticle = async (title, content) =>{
const article = new Article({title, content});
return await article.save();
};

const deleteArticle = async (id) =>{return await Article.findByIdAndDelete(id);};

module.exports = {GetAll, GetByID, createArticle, deleteArticle};
