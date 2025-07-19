const FaqService = require("../services/FaqService");

class FaqController {
  async getFaq(req, res) {
    const faq = await FaqService.getAllFaq();
    return res.status(200).json(faq);
  }
}

module.exports = new FaqController();
