const express = require("express");
const menu = require("../data/menu");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(menu);
});

router.get("/drinks", (req, res) => {
  res.json(menu.drinks);
});

router.get("/food", (req, res) => {
  res.json(menu.food);
});

module.exports = router;
