const mongoose=require("mongoose");
const userSchemam=mongoose.Schema({
    "name":String,
    "username":String,
    "email":String,
    "password":String,
});
const userModelm=mongoose.model("users",userSchemam);
module.exports={userModelm};