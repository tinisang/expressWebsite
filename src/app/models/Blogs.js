const mongoose = require('mongoose')
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Blog = new Schema({
    name: { type: String, default: 'hahaha' },
   description:{type:String, default:'ghjdrhdgjdfjhfdgfd'},
   slug: { type: String, slug: "name", unique:true }

  });

  module.exports = mongoose.model('Blog', Blog);
