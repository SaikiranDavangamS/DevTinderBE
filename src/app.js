const express = require("express");


const app = express();


app.use("/",(req,res) => {
    res.send("Namaste Saikiran")
})

app.use("/hello",(req,res) => {
    res.send("Hello from Namaste Node js")
})
app.use("/dashboard",(req,res) => {
    res.send("Hello from Namaste Node js Dashboard")
})


app.listen(7777,() => {
    console.log("Server running successfully on port 7777")
})