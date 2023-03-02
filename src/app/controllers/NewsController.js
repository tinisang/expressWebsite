
require('dotenv').config()
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
const Blogs = require('../models/Blogs')

class NewsController {
    index(req,res){
            res.render('news')
    }

    show(req,res,next){
           Blogs.findOne({slug: req.params.slug})
                .then (item =>{
                        res.render('singleNews',{
                                item: mongooseToObject(item)
                        })
                })
                .catch(next)
    }
    create(req,res,next){
        res.render('createNews')
    }

    store(req,res,next){
        const formData = req.body
        const newBlog = new Blogs(formData)
       newBlog.save()
        .then(()=>{
                res.redirect('/')
        })
    }
    env(req,res,next){
        res.json(process.env.PAGE_ACCESS_TOKEN)
    }
}

module.exports = new NewsController;