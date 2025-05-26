const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Виберіть маршрут");
});

module.exports = router;
