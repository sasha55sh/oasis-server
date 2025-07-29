const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userId: { type: String },
  firstName: { type: String },
  phone: { type: String },
});

module.exports = model("User", userSchema, "users");
