const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.get("/allProducts", async (req, res) => {
  console.log("All products");
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

// POST endpoint to add products
router.post("/products", async (req, res) => {
  console.log("all products");
  const { id } = req.body;
  try {
    const existingProducts = await Product.findOne({ id: id });
    if (existingProducts) {
      return res.status(400).send("Product already exists");
    }
    const products = await Product.create(req.body);
    res.status(201).send(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
