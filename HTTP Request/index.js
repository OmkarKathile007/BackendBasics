//package.json should attribute (type) should be (module) for ECMA 
import express from "express"

const app=express()

const port=3000

// get is how to respond to the local host server "/" represents how to respond when go inside get method
// GET request handler for the root URL
app.get("/",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("Hello World");
});


// http://localhost:3000/about
app.get("/about",(req,res)=>{
    
    res.send("<h1>Hello World </h1>")
    
})




// opens the new Port 
// Start the server and listen on the specified port
app.listen(port,()=>{
    console.log(`Serer Running on port ${port}`)
});

