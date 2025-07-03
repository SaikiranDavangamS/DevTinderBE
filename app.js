const express = require("express");
const connectDB = require("./src/config/database")


const app = express();
const User = require("./src/models/user")

app.use(express.json());



app.post("/signup",async(req,res)=> {
    console.log("User Data:", req.body);

    // const userObj = {
    //     firstName:"Saikiran",
    //     lastName:"Davangam",
    //     emailId:"saikirandavangamsreedhar@gmail.com",
    //     password:"Kiran@143",
    // }

    // const user = new User({
    //     firstName:"MS",
    //     lastName:"Dhoni",
    //     emailId:"msdhoni@gmail.com",
    //     password:"Dhoni@143",
    // })
    const user = new User(req.body);
try {
    await user.save();
res.status(200).send("User Created Successfully")
}
catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error")

}
})


connectDB().then(() => {
    console.log("Database Connection Established")
    app.listen(7777,() => {
    console.log("Server running successfully on port 7777")
})
}).catch(err => {
    console.error("Database Cannot be connected")

})
