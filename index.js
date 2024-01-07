import express from "express";
const app=express();
const port=3000;

app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.render("index.ejs",
    {
        year:new Date().getFullYear()
    }
    )
})
app.get("/about",(req,res)=>{
    res.render("about.ejs",{
        year:new Date().getFullYear()
    })
})
app.get("/project",(req,res)=>{
    res.render("project.ejs",{
        year:new Date().getFullYear()
    })
})
app.get("/resume",(req,res)=>{
    res.render("resume.ejs",{
        year:new Date().getFullYear()
    })
})
app.listen(port,()=>{
    console.log("The port is running successful")
})