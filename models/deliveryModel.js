const { Schema, model } = require("mongoose");

const deliverySchema = new Schema({
  deliveryId: { type: String },
  uid: { type: String },
  street: { type: String },
  house: { type: String },
  flat: { type: String },
});

module.exports = model("Delivery", deliverySchema, "delivery");
