const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const auth=async(req,res,next)=>{
const {token}=req.headers;
if(token){
    const decoded=jwt.verify(token, 'shhhhh');
    if(decoded){
        req.body.name=decoded.name;
        req.body.authorid=decoded.authorid;
        req.body.username=decoded.username;
        next();
    }
    else{
        res.status(201).send("Please Login again and try again");
    }
}
else{
    res.status(201).send("Please Login First");
    return;
}
};
module.exports={auth};