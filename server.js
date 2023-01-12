// dependencies
require("dotenv").config();
const{PORT, DATABASE_URL} = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");



mongoose.connect(DATABASE_URL)
mongoose.connection
    .on("open", () => console.log("you are connected to mongodb"))
    .on("close", () => console.log("You are Disconnected from mongodb"))
    .on("error", (error) => console.log(error))


//Model
     const ProductSchema = new mongoose.Schema({
            title: String, 
            price: Number,
            desc: String, 
            img: String,
            qty: Number,
     })
    
    const Product = mongoose.model("Product", ProductSchema);
// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes IDUC

app.get("/", (req, res) => {
    res.send("Hello World")
    })








app.listen(PORT,() => console.log(`This is the life you chose on port ${PORT}`))