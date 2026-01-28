const article = require('../services/article')

const GetAll = async (req,res) =>{res.json(await article.GetAll())};

const GetByID = async (req,res) =>{res.json(await article.GetByID(req.params.id))};

const createArticle = async (req,res) =>{ res.json(await article.createArticle(req.body.title,req.body.content))};

const deleteArticle = async (req,res) =>{res.json(await article.deleteArticle(req.params.id))};

module.exports = {GetAll, GetByID, createArticle, deleteArticle};