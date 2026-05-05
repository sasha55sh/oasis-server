const { Schema, model } = require("mongoose")

const nutritionProgramRequestSchema = new Schema({
    userData: {
        uid: { type: String},
        firstName: { type: String },
        phoneNumber: { type: String },
        street: { type: String },
        flat: { type: String },
        house: { type: String },
        comments: { type: String },
    },
    programData: {
        title: { type: String },
        kcal: { type: Number },
        duration: { type: Number },
        totalPrice: { type: Number }
    }
})

module.exports = model("NutritionRequest", nutritionProgramRequestSchema, "nutrition-request")