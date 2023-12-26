console.log("Seerat Arshad here")
const express = require('express')
const app = express() 

app.use('/assets',express.static("assets"))
app.use('/images',express.static('images'))

app.set("view engine", "ejs")

app.get("/", (req,res) => {
    console.log("Seerat")
    // res.status(500).send("Hi")
    res.render('haider', {text:"world"}) 
})

app.get("/haider", (req,res) => {
    console.log("Haider")
    // res.status(500).send("Hi")
    res.render('haider', {text:"world"}) 
})

app.get("/cities", (req,res) => {
    console.log("cities")
    res.render('cities', {text:"world"}) 
})

app.get("/contact", (req,res) => {
    console.log("contact")
    res.render('contact', {text:"world"}) 
})


app.get("/tspots", (req,res) => {
    console.log("tspots")
    res.render('tspots', {text:"world"}) 
})


app.get("/personalities", (req,res) => {
    console.log("personalities")
    res.render('personalities', {text:"world"}) 
})

// const userRouter = require("./routes/users")
// const postRouter = require("./routes/posts")

// app.use("/users", userRouter)
// app.use("/posts", postRouter)

app.listen(3000)


