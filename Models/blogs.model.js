const mongoose=require("mongoose");
const blogSchemam=mongoose.Schema({
    "authorname":String,
    "username":String,
    "authorid":Number,
    "title":String,
    "content":String,
    "category":String,
    "date":String,
    "likes":Number,
    "comments":Array,
});
const blogModelm=mongoose.model("blogs",blogSchemam);
module.exports={blogModelm};

