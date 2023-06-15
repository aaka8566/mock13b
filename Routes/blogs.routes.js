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
blogsRouterd.delete("/delete/:id",async(req,res)=>{
    //   console.log(req.body,"hi");
    const {id}=req.params;
console.log(id);
       const blog=await blogModelm.findById({"_id":id});
       console.log(blog);
       await blogModelm.findByIdAndDelete({"_id":id});
   res.status(200).send("blog deleted successfully");
   });

   blogsRouterd.patch("/edit/:id",async(req,res)=>{
    //   console.log(req.body,"hi");
    const {id}=req.params;

       const blog=await blogModelm.findById({"_id":id});
       await blogModelm.findByIdAndUpdate({"_id":id},req.body);
   res.status(200).send("blog updated successfully");
   });  
module.exports={blogsRouterd};