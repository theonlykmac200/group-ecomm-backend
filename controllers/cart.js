
const Cart = require("../models/Cart")
const User = require("../models/User")


//write code to add an product to the cart
const index = async (req, res) => {
    try {
        // Use req.user._id to retrieve the cart items of the current logged in user
        const cartItems = await Cart.find({ user: req.user._id });
        res.json(cartItems);
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
            await Cart.findByIdAndUpdate
            (req.params.id, req.body
                , {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
}

const addToCart = async (req, res) => {
    try {
        const {productId, count, subtotal} = req.body;
        await Cart.findOneAndUpdate({user: req.user._id}, {$push:{items: {product: productId, count, subtotal}}});
        res.json({message: "Item added to cart"});
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    index,
    create,
    del,
    update,
    addToCart
};

