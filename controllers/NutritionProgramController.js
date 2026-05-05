const NutritionProgramService = require("../services/NutritionProgramService")

class NutritionProgramController {
    async getAllNutritionPrograms(req, res) {
        const nutritionPrograms = await NutritionProgramService.getAllNutritionPrograms();
        return res.status(200).json(nutritionPrograms);
    }

    async createProgramRequest(req, res) {
        const uid = req.user?.uid;
        const programData = { ...req.body, uid };
        const program = await NutritionProgramService.createProgramRequest(programData)
        return res.status(201).json(program);
    }
}

module.exports = new NutritionProgramController();