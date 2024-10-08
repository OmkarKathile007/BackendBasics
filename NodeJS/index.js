//Using commin js
// const fs=require("fs")

// fs.writeFile("omkar.txt","My name is omkar",()=>{
//     console.log("Yes file has been changed")
//     fs.readFile("omkar.txt",(err,data)=>{
//       console.log(data.toString())
//     })
// })

// fs.appendFile("omkar.txt","he is very genius man",(e,d)=>{
//     console.log(d);
// })


//Using Ecma Module js

// import fs from "fs/promises"

// let a=await fs.readFile("omkar.txt");

// let b = await fs.writeFile("harry.txt","\n\n\n\n This is an Amazing Content");
import path from "path"


let Fpath="c:\\Users\\Admin\\BackenedDev\\NodeJS\\index.js"

console.log(path.extname(Fpath));
console.log(path.dirname(Fpath));
console.log(path.basename(Fpath));

// console.log(path.join("c:/","programs"))




