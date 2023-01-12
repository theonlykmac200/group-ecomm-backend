const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    //add user schema 
  product: [product.Schema],
  count: { type: Number, required: true },
  subtotal:{ type: Number, required: true }
 
})

const Cart = mongoose.model("Cart", CartSchema)

module.exports = Cart