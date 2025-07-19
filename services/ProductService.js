const Product = require("../models/productModel");

class ProductService {
  async getAllProducts() {
    return await Product.find();
  }

  async getProductByHandle(handle) {
    return await Product.findOne({ handle });
  }

  async getProductsByCategory(category) {
    return await Product.find({ category });
  }

  async searchProducts(query) {
    const regex = new RegExp(query, "i");
    return await Product.find({
      $or: [{ title: regex }, { description: regex }],
    });
  }

  async getSortedProducts(sort) {
    let sortOption = {};
    switch (sort) {
      case "hprice":
        sortOption.price = -1;
        break;
      case "lprice":
        sortOption.price = 1;
        break;
      case "new":
        sortOption.createdAt = -1;
        break;
    }
    return await Product.find().sort(sortOption);
  }
}

module.exports = new ProductService();
