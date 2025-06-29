const express = require("express");


const app = express();


const {adminAuth,userAuth} = require("./middleWares/auth")

app.use("/admin",adminAuth)

app.post("/user/login",(req,res,next) => {
    res.send("User logged in successfully!!!")
})

app.get("/user",userAuth,(req,res)=>{
    res.send("User Data Sent")
})
app.get("/admin/getAllData",(req,res) => {
    res.send("All Data fetched")
})

app.get("/admin/DeleteUser",(req,res)=>{
    res.send("User Deleted successfully")
})

// This will match all the HTTP methods API calls to /test
// app.use("/",(req,res) => {
//     res.send("Namaste Saikiran")
// })


app.listen(7777,() => {
    console.log("Server running successfully on port 7777")
})