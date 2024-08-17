import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
  productId:{
    type: mongoose.Schema.Types.objectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    required: true
  }
})
const orderSchema = new mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.objectId,
    ref: "User"
  },
  orderItem: {
    type: [orderItemSchema]
  },
  address: {
    types: String,
    required: true
  },
  status: {
    types: String,
    enum: ["PENDING, CANCELLED, DELIVERED"],
    default: "PENDING"
  }
}, 
  {timestamps: true})

  export const Order = mongoose.model("Order", orderSchema)