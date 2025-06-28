const express = require("express");


const app = express();




// app.use("/hello",(req,res) => {
//     res.send("Hello from Namaste Node js")
// })
// app.use("/dashboard",(req,res) => {
//     res.send("Hello from Namaste Node js Dashboard")
// })

// app.use("/test",(req,res) => {
//     res.send("Test route for validation")
// })


// This will match only "get" HTTP method API calls to /user
app.get("/user/:userID/:userName/:password",(req,res) => {
    console.log("req>",req.params)
    res.send([
        {firstName:"Saikiran",
        lastName:"Davangam Sreedhar"
    },
        {firstName:"Saikiran",
        lastName:"Davangam Sreedhar"
    },
        {firstName:"Saikiran",
        lastName:"Davangam Sreedhar"
    },])
})

app.post("/user",(req,res)=>{
    res.send("Data saved successfully to Database!")
})
app.delete("/user",(req,res)=>{
    res.send("Deleted Data saved successfully from Database!")
})

// This will match all the HTTP methods API calls to /test
app.use("/",(req,res) => {
    res.send("Namaste Saikiran")
})


app.listen(7777,() => {
    console.log("Server running successfully on port 7777")
})