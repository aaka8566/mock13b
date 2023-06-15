const express=require("express");
const blogsRouterd=express.Router();
const {blogModelm}=require("../Models/blogs.model");

blogsRouterd.get("/",async(req,res)=>{
    res.send("All blogs");
});

blogsRouterd.get("/blogs",async(req,res)=>{
    const blogs=await blogModelm.find();

    res.send(blogs);
});
blogsRouterd.post("/add",async(req,res)=>{
 //   console.log(req.body,"hi");
    const blog=await blogModelm(req.body);
    await blog.save();

    res.status(200).send("blog added successfully");
});
module.exports={blogsRouterd};