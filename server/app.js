const express = require("express")

const app = express()

app.use("/",(req,res)=>{
    res.send("welcome to the server of your web application")
})

app.listen(8000)