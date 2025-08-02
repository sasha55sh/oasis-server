const NewsService = require("../services/NewsService");

class NewsController {
  async getNews(req, res) {
    const news = await NewsService.getAllNews();
    return res.status(200).json(news);
  }

  async getNewsByHandle(req, res) {
      const { handle } = req.params;
      const news = await NewsService.getNewsByHandle(handle);
      return res.status(200).json(news);
    }
  
}

module.exports = new NewsController();
