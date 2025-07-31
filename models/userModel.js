const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    uid: { type: String, required: true, unique: true },
    firstName: { type: String },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema, "users");
