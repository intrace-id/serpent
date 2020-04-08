 
const Article = require('../models/article-model');

class ArticleController {
    static create(req, res, next) {
        const { title, content, publishDate, tags } = req.body;
        const userId = req.decoded._id;

        Article.create({ title, content, publishDate, tag, userId })
        .then( data => {
            res.status(201).json(data)
        })
        .catch(next)
    }
    
    static findAll(req, res, next) {
        Article.find().populate(['userId','tags'])
        .then( data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static findOne(req, res, next) {
        const id = req.params.articleId
        
        Article.findById(id).populate(['userId','tags'])
        .then( data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static deleteOne(req, res, next) {
        const id = req.params.articleId

        Article.findByIdAndDelete(id)
        .then( data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static updateOne(req, res, next) {
        const id = req.params.articleId
        let update = {}

        req.body.title && (update.title = req.body.title)
        req.body.content && (update.content = req.body.content)                

        Article.findByIdAndUpdate(id, { $set: update }, { new: true, runValidators: true })
        .then( data => {
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = ArticleController