
import express from "express"

import path, { basename, dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

var BandName="";

const __dirname=dirname(fileURLToPath(import.meta.url))

const app=express();
const port =3000;

// app.get("/",(req,res)=>{
//     res.send("<h1>Login Form </h1>")
// })

function EncryptData(req,res,next){
    BandName=req.body["name"]+" "+req.body["pass"];
    next();
}

app.use(bodyParser.urlencoded({extended:true}))
app.use(EncryptData)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/submit",(req,res)=>{
    console.log(req.body)
    res.send(`<h1>Your name ${BandName}`)
})



app.listen(port,()=>{
    console.log("Server running on port 3000")
})


