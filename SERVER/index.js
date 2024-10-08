import express from "express"


const app=express();
const port=3000;


app.get("/",(req,res)=>{
    res.send("<h1>WELCOME TO HOME PAGE OF SERVER </h1>");
    console.log(req.rawHeaders);
});

app.get("/about",(req,res)=>{
   res.send("<h2>This Server has been Created by Omkar</h2>")
});

app.get("/contact",(req,res)=>{
    res.send("<h2>Omkar Kathile Contact : +91-8388388389");
});

app.listen(port,()=>{
    console.log(`Server running on the port ${port}`);
});