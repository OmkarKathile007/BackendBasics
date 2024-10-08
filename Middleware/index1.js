import express from "express";
//import the following dir to server
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//body-parser ->MiddleWare as urltype
app.use(bodyParser.urlencoded({extended:true}));


// It executes entire index.html response
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


// after submiting the response the post print the input data
app.post("/submit",(req,res)=>{
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//take a look at package morgan in npm morgan
