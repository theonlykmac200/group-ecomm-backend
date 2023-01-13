// dependencies
const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const app = express()

require("dotenv").config()

const productRouter = require("./routes/product")
const userRouter = require("./routes/user")
const cartRouter = require("./routes/cart")

require("./config/database")

app.use(logger("dev"))
app.use(express.json())
app.use(cors())

//Routers

app.use("/product", productRouter)


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

const {PORT = 3001} = process.env
app.listen(PORT,() => console.log(`This is the life you chose on port ${PORT}`))