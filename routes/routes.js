const express = require("express");
const router = express.Router();

const menuController = require("../controllers/MenuController");

router.get("/", (req, res) => {
  res.send("Виберіть маршрут");
});

router.get("/menu", menuController.getMenu);

module.exports = router;
