const express=require('express')
const app=express();

app.get("/",function(req,res){
    res.send("This is the home page")
})
app.get("/about",function(req,res){ 
    res.send("This is the about page")
}) 
app.get("/contact",function(req,res){
    res.send("This is the contact page")
}) 
app.all("*",function(req,res){
    res.status(404).send("404 Not Found")
}) 
app.listen(3000)