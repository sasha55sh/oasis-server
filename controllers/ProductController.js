const productModel = require("../models/productModel");
const ProductService = require("../services/ProductService");

class ProductController {
  async getAllProducts(req, res) {
    const product = await ProductService.getAllProducts();
    return res.status(200).json(product);
  }

  async getProductByHandle(req, res) {
    const { handle } = req.params;
    const product = await ProductService.getProductByHandle(handle);
    return res.status(200).json(product);
  }

  async getProductsByCategory(req, res) {
    const { category } = req.params;
    const product = await ProductService.getProductsByCategory(category);
    return res.status(200).json(product);
  }

  async searchProducts(req, res) {
    const { value } = req.query;
    const product = await ProductService.searchProducts(value);
    return res.status(200).json(product);
  }

  async getSortedProducts(req, res) {
    const { sort } = req.query;
    const product = await ProductService.getSortedProducts(sort);
    res.status(200).json(product);
  }
}

module.exports = new ProductController();
