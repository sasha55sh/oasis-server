const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
  id: { type: String },
  title: { type: String },
  description: { type: String },
  cal: { type: Number },
  category: { type: String, required: true },
  price: { type: Number },
});

module.exports = model("Menu", menuSchema, "menu");
