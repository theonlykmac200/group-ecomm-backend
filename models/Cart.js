const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    //fix 
  product:{  },
  email: { type: String, required: true },
  quantity: { type: Number, required: true }
 
})

const Cart = mongoose.model("Cart", CartSchema)

module.exports = Cart