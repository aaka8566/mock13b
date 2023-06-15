const mongoose=require("mongoose");
const subSchema = new mongoose.Schema({
    "username": String,
    "content":String 
  });
const blogSchemam=mongoose.Schema({
    "authorname":String,
    "username":String,
    "authorid":String,
    "title":String,
    "content":String,
    "category":String,
    "date":String,
    "likes":Number,
    "comments":Object,
});
const blogModelm=mongoose.model("blogs",blogSchemam);
module.exports={blogModelm};

