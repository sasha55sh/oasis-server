const { Schema, model } = require("mongoose");

const calorieOptioSchema = new Schema({
    kcal: { type: Number },
    proteins: { type: Number },
    fats: { type: Number },
    carbohydrates: { type: Number },
    prices: { type: Array }
})
const nutritionProgramSchema = new Schema({
    id: { type: String },
    title: { type: String },
    mainDescription: { type: String },
    forWhomDescription: { type: String },
    compositionDescription: { type: String },
    calorieOptions: [calorieOptioSchema]
})

module.exports = model("NutritionProgram", nutritionProgramSchema, "nutrition")