const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
  id: { type: String },
  image: { type: String },
  title: { type: String },
  handle: { type: String },
  date: { type: String },
  text: { type: String },
  highText: { type: String },
  lowText: { type: String },
  category: { type: String },
});

module.exports = model("News", newsSchema, "news");
