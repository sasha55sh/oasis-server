const { Schema, model } = require("mongoose")

const nutritionProgramRequestSchema = new Schema({
    userData: {
        uid: { type: String },
        firstName: { type: String },
        phoneNumber: { type: String },
        method: {
            type: String,
            enum: ["self-pickup", "courier"],
        },
        street: { type: String },
        flat: { type: String },
        house: { type: String },
    },
    programData: {
        title: { type: String },
        kcal: { type: Number },
        duration: { type: Number },
        totalPrice: { type: Number }
    },
    comments: { type: String },
    status: {
        type: String, enum: ["активне", "неактивне"]
    }
}, { timestamps: { createdAt: true } })

module.exports = model("NutritionRequest", nutritionProgramRequestSchema, "nutrition-request")