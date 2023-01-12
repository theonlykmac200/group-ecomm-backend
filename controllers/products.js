const express = require("express")
const productRouter = express.Router()
const session =require("express-session")
// const Product = require("../models/product")
const User = require("../models/user")
// const Cart = require("../models/cart")

//INDEX
productRouter.get("/", async (req, res) => {
    try {
       res.status(200).json(await Product.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

//CREATE
productRouter.post("/", async (req, res) => {
    try {
        res.status(200).json(await Product.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Delete
productRouter.delete("/products/:id", async (req, res) => {
    try {
        res.status(200).json(await Product.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Update
productRouter.put("/products/:id", async (req, res) => {
    try {
        res.status(200).json(await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = productRouter