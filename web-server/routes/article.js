const express = require('express');
var router = express.Router();
const article = require('../controllers/article')

router.route('/')
            .get(article.GetAll)
            .post(article.createArticle)
router.route('/:id')
            .get(article.GetByID)
            .delete(article.deleteArticle)

module.exports = router;