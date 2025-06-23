const express = require('express')
const app = express()

app.get("/", (req, res)=>{
    // res.send("Test successful")
    res.json({
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
