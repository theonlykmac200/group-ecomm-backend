const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Price: { type: Number, required: true },
  discription: { type: String, required: true },
  quantity:{type:Number,require:true},
  
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product