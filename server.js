// dependencies
require("dotenv").config();
const{PORT, DATABASE_URL} = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override")
const morgan = require("morgan");
const cors = require("cors");
const productsController = require("./controllers/products");
// const cartController = require("./controllers/cart");
// const usersController = require("./controllers/users");
// const sessionsController = require("./controllers/sessions");



mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
const db = mongoose.connection
    db.on("open", () => console.log("you are connected to mongodb"))
    db.on("close", () => console.log("You are Disconnected from mongodb"))
    db.on("error", (error) => console.log(error))


//Model



// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/products", productsController)
// app.use("/cart", cartController)
// app.use("/users", usersController)
app.use(methodOverride("_method"))
app.use(express.static("public"))

// routes IDUC

// app.get("/", (req, res) => {
//     res.send("Hello World")
//     })
// //INDEX
// app.get("/products", async (req, res) => {
//     try {
//        res.status(200).json(await Product.find({}))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// //CREATE
// app.post("/products", async (req, res) => {
//     try {
//         res.status(200).json(await Product.create(req.body))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// //Delete
// app.delete("/products/:id", async (req, res) => {
//     try {
//         res.status(200).json(await Product.findByIdAndRemove(req.params.id))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// //Update
// app.put("/products/:id", async (req, res) => {
//     try {
//         res.status(200).json(await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

//Listener

app.listen(PORT,() => console.log(`This is the life you chose on port ${PORT}`))