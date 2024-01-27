const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodoverride = require("method-override");
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
let port = 9090;
app.listen(port,()=>{
    console.log("Server is Working on "+port+".");
});
app.get("/",(req,res)=>{
   res.render("home.ejs")
});
main().then(()=>{
    console.log("Connected Sucessfully");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
const data = require("./models/data.js");   // exporting model from another document
app.post("/:NewData",(req,res)=>{
    let{from,to,message} = req.body;
    let data1 = new data({
        from : from,
        to : to,
        message : message,
        date : new Date()})
        data1.save();          //for saving data
        res.redirect("/");
})
app.put("/chat/update/:id", async (req,res)=>{
    let {id} = req.params;
    let {msg} = req.body;
    let V = await data.findByIdAndUpdate(id,{message : msg },{runValidators : true,new : true});  //all mongoDB function are async so use await with them
    res.redirect("/:showdatabase");  //for update any document
})
app.delete("/chat/:id/delete",async (req,res)=>{
    let {id} = req.params; 
    let d = await data.findByIdAndDelete(id); //for delete any document 
    res.redirect("/:showdatabase");      
})
app.get("/chat/:id/EDIT", async (req,res)=>{
    let {id} = req.params;
    let A =  await data.findById(id);   // for finding any document in colection
    //console.log(A);
    res.render("edit.ejs",{A});
})
app.get("/:add/data",(req,res)=>{
      res.render("new.ejs");
})
app.get("/:showdatabase", async (req,res)=>{      // async function work with await
    let chat =  await data.find();
    res.render("index.ejs",{chat});// to pass variable to ejs file
})

