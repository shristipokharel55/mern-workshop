const express = require('express')
const connectToDatabase = require('./database/index.js')

const app = express()

connectToDatabase()

app.get("/", (req, res)=>{
    // res.send("Test successful")
    res.status(200).json({
        message : "This is home page."
    })
    console.log("Request received at get method")
})

app.get("/about", (req, res)=>{
    res.json({
        message : "This is about page."
    })
})

app.listen(3001, ()=>{
    console.log("NodeJS project has started on port 3001")
})


//mongodb+srv://shristipokharel:<shristipokharel>@cluster0.3oun9dm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0