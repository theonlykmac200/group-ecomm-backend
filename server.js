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
app.use(express.urlencoded({extended: false}))
app.use(require("./config/auth"))
// move config auth before the routes

//Routers

app.use("/product", productRouter)
app.use("/user", userRouter)
app.use("/cart",cartRouter)







//Listener

const {PORT = 3001} = process.env
app.listen(PORT,() => console.log(`This is the life you chose on port ${PORT}`))