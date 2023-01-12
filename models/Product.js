const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Price: { type: Number, required: true },
  desc: { type: String, required: true },
  qty:{type:Number,require:true},
  img:{type: String, required: true}
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product