const { Schema, model } = require("mongoose");

const faqSchema = new Schema({
  id: { type: String },
  question: { type: String },
  answer: { type: String },
});

module.exports = model("FAQ", faqSchema, "faq");
