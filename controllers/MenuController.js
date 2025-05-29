const menuService = require("../services/MenuService");

class MenuController {
  async getMenu(req, res) {
    const { category } = req.query;
    const menu = await menuService.getMenuByCategory(category);
    return res.status(200).json(menu);
  }
}

module.exports = new MenuController();
