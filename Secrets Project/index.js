

import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url";

import bodyParser from "body-parser";
const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;

const checkPass=false;
var pass="";

function EncryptCode(req,res,next){
    console.log(req.body);
    pass=req.body["password"];
    next();
}

app.use(bodyParser.urlencoded({extended:true}))
app.use(EncryptCode)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/check",(req,res)=>{
    if(pass==="ILoveProgramming"){
        res.sendFile(__dirname+"/public/secret.html")
    }
    else{
        res.send("<h1>Password Incorrect</h1>")
    }
})


app.listen(port,()=>{
    console.log("Server Started on Local Host:3000")
})



