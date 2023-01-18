const Cart = require("../models/Cart")


const index = async (req, res) => {
    try {
        res.json(await Cart.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
}


const del = async (req, res) => {
    try {
        res.json(await Cart.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async (req, res) => {
    try {
        res.json(
            await Cart.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
}


const create = async (req, res) => {
    console.log(req.body)
    try {
        res.json(await Cart.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
}



module.exports = {
    index,
    del,
    update,
    create
}

// Compare this snippet from server.js: