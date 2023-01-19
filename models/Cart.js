const mongoose = require("mongoose")
const product = require("./Product")
const user = require("./User")

const CartSchema = new mongoose.Schema({
  //add user schema
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  count: { type: Number, required: true },
  subtotal:{ type: Number, required: true }
  
  })

const Cart = mongoose.model("Cart", CartSchema)

module.exports = Cart