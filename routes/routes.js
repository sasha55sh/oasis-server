const express = require("express");
const router = express.Router();

const MenuController = require("../controllers/MenuController");
const FaqController = require("../controllers/FaqController");
const ProductController = require("../controllers/ProductController");

router.get("/", (req, res) => {
  res.send("Виберіть маршрут");
});

router.get("/menu", MenuController.getMenu);
router.get("/faq", FaqController.getFaq);
router.get("/shop", ProductController.getAllProducts);
router.get("/product/:handle", ProductController.getProductByHandle);
router.get("/shop/:category", ProductController.getProductsByCategory);
router.get("/search", ProductController.searchProducts);
router.get("/sort", ProductController.getSortedProducts);

module.exports = router;
