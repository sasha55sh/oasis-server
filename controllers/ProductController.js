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

  async getProductByTitle(req, res) {
    const { title } = req.query;
    const product = await ProductService.getProductByTitle(title);
    return res.status(200).json(product);
  }

  async getProductsByCategory(req, res) {
    const { category } = req.query;
    const product = await ProductService.getProductsByCategory(category);
    res.status(200).json(product);
  }

  async getFilteredProducts(req, res) {
    const { sort } = req.query;
    const product = await ProductService.getFilteredProducts(sort);
    res.status(200).json(product);
  }
}

module.exports = new ProductController();
