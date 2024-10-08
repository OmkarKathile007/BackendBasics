import express from "express";

const app=express()

app.get("/",(req,res)=>{
    res.send("<h1> Server Successfull Respond to get Request </h1>")
})

app.get("/about",(req,res)=>{
    res.send("<div> <h1>About</h1> <p>Name: Omkar Kathile </p> <p> Contact:+91-9322916728 </p>  </div>")
})

app.get("/contact",(req,res)=>{
    res.send("<h2>Email : ok123@gmail.com </h2>")
})

app.listen(3000,()=>{
    console.log("Server 3000 started executing")
})


