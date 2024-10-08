

import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname=dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;
var bandName="";

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
})

function bandNameGenerator(req,res,next){
  console.log(req.body);
  bandName=req.body["street"]+" "+req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.post("/submit",(req,res)=>{
  console.log(req.body);
  res.send(`<h1> Your BandName is ${bandName} </h1>`)
  // res.send()
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
