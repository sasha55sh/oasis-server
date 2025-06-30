const express = require("express");
const router = express.Router();

const MenuController = require("../controllers/MenuController");
const FaqController = require("../controllers/FaqController");
const ProductController = require("../controllers/ProductController");
const ProductService = require("../services/ProductService");

router.get("/", (req, res) => {
  res.send("Виберіть маршрут");
});

router.get("/menu", MenuController.getMenu);
router.get("/faq", FaqController.getFaq);

router.get("/shop", ProductController.getAllProducts);
router.get("/shop", ProductService.getProductsByCategory);
router.get("/shop", ProductController.getFilteredProducts);
router.get("/shop", ProductController.getProductByTitle);
router.get("/shop/:handle", ProductController.getProductByHandle);

module.exports = router;
