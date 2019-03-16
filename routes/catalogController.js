const express = require("express");
const router = express.Router();
const { getItems, getItem } = require("../utility/itemDB");
const { categories } = require("../utility/categories");
const Item = require("../models/item");

let itemModel;

router.use("/assets", express.static("assets"));

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/categories", (req, res) => {
  res.render("categories", { itemList: getItems(), categories: categories });
});

router.use("/categories/item/:itemID", (req, res) => {
  item = getItem(req.params.itemID);
  if (item === undefined) res.redirect("/categories");
  itemModel = new Item(
    item.itemCode,
    item.itemName,
    item.catalogCategory,
    item.Description,
    item.rating,
    item.getImageURL
  );
  console.log(itemModel);

  res.render("item", { item: itemModel });
});

router.get("/categories/feedback/:itemID", (req, res) => {
  item = getItem(req.params.itemID);
  itemModel = new Item(
    item.itemCode,
    item.itemName,
    item.catalogCategory,
    item.Description,
    item.rating,
    item.getImageURL
  );
  console.log(itemModel);

  res.render("feedback", { item: itemModel });
});
module.exports = router;
