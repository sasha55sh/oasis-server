const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    id: { type: String },
    cal: { type: Number },
    carbohydrates: { type: Number },
    description: { type: String },
    category: { type: String },
    fats: { type: Number },
    grams: { type: Number },
    handle: { type: String, required: true },
    image: { type: String },
    price: { type: Number },
    proteins: { type: Number },
    title: { type: String },
    discount: { type: Number },
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema, "shop");
