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




//Listener

const {PORT = 3001} = process.env
app.listen(PORT,() => console.log(`This is the life you chose on port ${PORT}`))