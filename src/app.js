const express = require("express");


const app = express();





app.use("/user",
    // Route Handler
    (req,res,next) => {
        console.log("RouteHandler1")
        next();
        // res.send("1st Response")


},(req,res,next) => {
    console.log("RouteHandler2")
          // res.send("2nd Response")
    next()
},(req,res,next) => {
    console.log("RouteHandler2")
    //   res.send("3rd Response")
    next()
},(req,res,next) => {
    console.log("RouteHandler2")
    //   res.send("4th Response")
        next()
}
)

// This will match all the HTTP methods API calls to /test
// app.use("/",(req,res) => {
//     res.send("Namaste Saikiran")
// })


app.listen(7777,() => {
    console.log("Server running successfully on port 7777")
})