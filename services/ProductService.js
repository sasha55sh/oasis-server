const Product = require("../models/productModel");

class ProductService {
  async getAllProducts() {
    return await Product.find();
  }

  async getProductByHandle(handle) {
    return handle ? await Product.findOne({ handle }) : await Product.find();
  }

  async getProductByTitle(title) {
    return title ? await Product.find({ title }) : await Product.find();
  }

  async getProductsByCategory(category) {
    return category ? await Product.find({ category }) : await Product.find();
  }

  async getFilteredProducts(sort) {
    let sortOptions = {};

    switch (sort) {
      case "HPRICE":
        sortOptions.price = -1;
        break;
      case "LPRICE":
        sortOptions.price = 1;
        break;
      case "NEW":
        sortOptions.createdAt = -1;
        break;
    }
    return await Product.find().sort(sortOptions);
  }
}

module.exports = new ProductService();
