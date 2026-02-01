import mongoose, { Mongoose } from "mongoose";

const OrderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        Type: Number,
        requires: true,
    }
})
const orderSchema = new mongoose.Schema({
    costumer: {
        type: Mongoose.Schema.Types.objectId,
        ref: "User",
        required: true,
    },
    orderPrice: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: [OrderItemSchema]
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "cancle", "delivered"],
        default: "pending",
    }
}, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema) //("of what make", using what)