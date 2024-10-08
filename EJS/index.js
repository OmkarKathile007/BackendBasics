import express from "express"

const app=express();


let date=new Date();
let day=date.getDay();
day=0
let type="";
let adv="";

if(day==0||day==6){
    type="Hey,Its Weekened, ";
    adv="It's time to have some fun";
}
else{
    type="Hey,Its WeekDay, ";
    adv="It's time to work hard";
}



app.get("/",(req,res)=>{

     //                   |Specify the loc| & |change of attribute in .ejs file|
    res.render("index.ejs",{dayType:type ,advice:adv})
   
});

app.listen(3000,()=>{
    console.log("Server 3000 executed!");
})

