const mongoose = require("mongoose")


const connectDB = async() => {
    await mongoose.connect("mongodb+srv://saikirandavangamsreedhar:Kiran%40143@namastenodejs.kozzw8k.mongodb.net/devTinder")
}

module.exports = connectDB


// mongoose.connect("mongodb+srv://saikirandavangamsreedhar:Kiran%40143@namastenodejs.kozzw8k.mongodb.net/")

