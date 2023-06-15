const express=require("express");
const app=express();
const {connection}=require("./db");
require("dotenv").config();
const cors=require("cors");
const {userRouterd}=require("./Routes/user.routes");
const {blogsRouterd}=require("./Routes/blogs.routes");
const {auth}=require("./Middleware/auth");


app.use(express.json());
app.use(cors());

app.get("/",async(req,res)=>{
    res.status(200).send("Hello mock13 backend")
}
)

app.use("/users",userRouterd);
 app.use(auth);
app.use("/blogs",blogsRouterd);


app.listen(process.env.PORT,async()=>{
    try{
await connection;
console.log("Connected to " +process.env.PORT);
    }
    catch(err){console.log(err.message);}
})