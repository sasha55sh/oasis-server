const FAQ = require("../models/faqModel");

class FaqService {
  async getAllFaq() {
    return await FAQ.find();
  }
}

module.exports = new FaqService();
