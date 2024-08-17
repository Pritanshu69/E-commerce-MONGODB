import mongoose from "mongoose"
import { Category } from "./catagory.models";
import { User } from "./users.models";
const productSchema = new mongoose.Schema({
  description: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  },
  productImage:{
    type: String
  },
  price: {
    type: Number,
    default: 0
  },
  stock:{
      default: 0,
      type: String
  },
  Category:{
    type:mongoose.Schmea.types.ObjectId,
    ref: "Category",
    required: true
  },
  owner:{
    type:mongoose.Schema.types.ObjectId,
    ref: "User"
  }
}, {timestamps:true});

export const Product = mongoose.model("Category",  productSchema)