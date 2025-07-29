const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    orderId: { type: String, required: true },
    firstName: { type: String, required: true },
    phone: { type: String, required: true },
    selectedDate: { type: String, required: true },
    selectedTime: { type: String, required: true },
    method: { type: String, required: true },
    street: { type: String },
    flat: { type: String },
    house: { type: String },
    comments: { type: String },
    cutleryQuantity: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    products: [
      {
        productId: { type: String, required: true },
        title: { type: String, required: true},
        image: { type: String, required: true },
        grams: { type: Number, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: { createdAt: true, updatedAt: false,} }
);

module.exports = model("Order", orderSchema, "orders");
