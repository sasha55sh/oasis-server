const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    uid: { type: String, required: true, unique: true },
    firstName: { type: String, default: "Guest" },
    phone: { type: String, required: true },
    email: { type: String, default: "" },
    favorites: [
      {
        id: String,
        handle: String,
        title: String,
        price: Number,
        image: String,
        grams: Number,
        discount: { type: Number, default: 0 },
        description: String,
      },
    ],
    street: { type: String, default: "" },
    house: { type: String, default: "" },
    flat: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema, "users");
