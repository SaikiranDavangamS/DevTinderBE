const express = require("express");
const connectDB = require("./src/config/database")


const app = express();
const User = require("./src/models/user")

app.use(express.json());


app.post("/signup",async(req,res)=> {

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

app.get("/user",async(req,res) => {
    const userEmail = req.body.emailId;
    try{
        const user = await User.findOne({emailId:userEmail})
        res.send(user)
        const users = await User.find({emailId:userEmail});
        // if(users.length === 0){
        //     res.status(404).send("User not found")
        // }
        // else{
        // res.send(users)
        // }
    }catch(err){
        res.status(400).send("Something went wrong")
    }

})

app.get("/user/:id",async(req,res) => {

    const userId = req.params.id;

    try{
        const user  = await User.findById(userId);
        if(!user){
            return res.status(404).send("User not found")
        }
        else{
        res.send(user)
        }

    } catch(err){
        res.status(400).send("Something went wrong")
    }
})

app.patch("/user/:id",async(req,res) => {
    const userId = req.params.id;
    const updateData = req.body;
    try {
        await User.findByIdAndUpdate(userId, updateData);
        res.send("User updated successfully")
    }
    catch(err){
        return res.status(400).send("Something went wrong")
    }

})

app.delete("/user/:id",async(req,res) => {
    const userId = req.params.id;

    try{
        const user = await User.findByIdAndDelete({_id:userId});
        if(!user){
            return res.status(404).send("User not found")
        }
        else{
            res.send("User deleted successfully")
        }
    } catch(err){
        res.status(400).send("Something went wrong")
    }
})

app.get("/feed",async(req,res) => {
    try {
        const users = await User.find({})
        res.send(users)
    }
    catch(err){
        res.status(400).send("Something went wrong")
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
