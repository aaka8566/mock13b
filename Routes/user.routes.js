const express = require('express');
const userRouterd = express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const {userModelm}=require("../Models/users.model");


userRouterd.get("/",async(req,res)=>{
    res.send("All users details");
});

userRouterd.post("/register",async(req,res)=>{
   try{
const {password}=req.body;
bcrypt.hash(password, 5,async function(err, hash) {
    // Store hash in your password DB.
    if(err){
        res.send(500).send(err.message);
    }
    req.body.password=hash;
    const user=await userModelm(req.body);
    await user.save();
res.status(200).send("user registered successfully");
});
   }
   catch(err){
    res.send(500).send(err.message);
   }
});

userRouterd.get("/login",async(req,res)=>{
 try{

    const {email,password}=req.body;
    const user=await userModelm.findOne({email});
    if(user){
        bcrypt.compare(password, hash, function(err, result) {
            // result == true
            if(result){
                const token = jwt.sign({ "name": user.name, "username": user.username,"authorid":user._id }, 'shhhhh');
                res.status(200).send({"token":token});
            }
            else{
                res.status(200).send("wrong credentials");
            }
        });
    }
   else{
    res.status(200).send("no user found");
   }
 }
 catch(err){res.status(500).send(err.message);}
});
module.exports={userRouterd};