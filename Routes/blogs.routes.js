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
    const blog=await blogModelm(req.body);
    await blog.save();

    res.send(blog,"blog added successfully");
});
module.exports={blogsRouterd};