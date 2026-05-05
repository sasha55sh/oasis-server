const NutritionProgram = require("../models/nutritionProgramModel");
const NutritionRequest = require("../models/nutritionRequest")

class NutritionProgramService {
    async getAllNutritionPrograms() {
        return await NutritionProgram.find()
    }

    async createProgramRequest(programData) {
        const program = new NutritionRequest(programData);
        return await program.save()
    }
}

module.exports = new NutritionProgramService();