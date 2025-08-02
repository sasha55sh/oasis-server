const Menu = require("../models/menuModel");

class MenuService {
  async getMenuByCategory(category) {
    return category ? await Menu.find({ category }) : await Menu.find();
  }
}

module.exports = new MenuService();
