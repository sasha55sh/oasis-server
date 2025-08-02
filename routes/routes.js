const express = require("express");
const router = express.Router();

const MenuController = require("../controllers/MenuController");
const FaqController = require("../controllers/FaqController");
const ProductController = require("../controllers/ProductController");
const OrderController = require("../controllers/OrderController");
const NewsController = require("../controllers/NewsController");
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.get("/", (req, res) => {
  res.send("Choose route");
});

router.get("/menu", MenuController.getMenu);
router.get("/faq", FaqController.getFaq);
router.get("/shop", ProductController.getAllProducts);
router.get("/product/:handle", ProductController.getProductByHandle);
router.get("/shop/:category", ProductController.getProductsByCategory);
router.get("/search", ProductController.searchProducts);
router.get("/sort", ProductController.getSortedProducts);
router.get("/news", NewsController.getNews);
router.get("/news/:handle", NewsController.getNewsByHandle);
router.get("/account", AuthMiddleware.requireAuth, UserController.getUser);
router.get("/favorites", AuthMiddleware.requireAuth, UserController.getFavorites);
router.get("/account/orders", AuthMiddleware.requireAuth, OrderController.getOrders);

router.post("/favorites", AuthMiddleware.requireAuth, UserController.toggleFavorite);
router.post("/order", AuthMiddleware.optionalAuth, OrderController.createOrder);
router.post("/verify-code", AuthController.verifyCode);

router.patch("/account", AuthMiddleware.requireAuth, UserController.updateProfile);

module.exports = router;
