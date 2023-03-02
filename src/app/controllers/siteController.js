const Blog = require('../models/Blogs')
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class SiteController {
    index(req,res){

     

        Blog.find({})
                .then(blogs => {
                        res.render('home',{
                                blogs:multipleMongooseToObject(blogs)
                        })
                })
                .catch(error => res.json({e:'ERROR!!!!'}))
               
          

    }

    search(req,res){
            res.render('search')
    }
}

module.exports = new SiteController;