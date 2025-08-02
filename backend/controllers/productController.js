const Product = require("../models/Product");

// @desc    Get all products
// @route   GET /api/products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to get products" });
  }
};

// Get only one prodcuts
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

// @desc    Add a product
// @route   POST /api/products
exports.addProduct = async (req, res) => {
  const { name, description, price, inStock } = req.body;
  console.log({ name, description, price, inStock });

  try {
    const product = new Product({
      name,
      description,
      price,
      inStock,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add product", error: error.message });
  }
};

//Update a full specific product by ID

exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, description, price, inStock } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not Found" });

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.inStock = inStock || product.inStock;

    const updated = await product.save();
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
};

// Delete a product a by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne({ _id: req.params.id });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
