const News = require("../models/newsModel");

class NewsService {
  async getAllNews() {
    return await News.find();
  }

  async getNewsByHandle(handle) {
    return await News.findOne({ handle });
  }
}

module.exports = new NewsService();
