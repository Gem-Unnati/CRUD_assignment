const Product = require("../model/Product");

// Getting products
const productAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single product
const productDetails = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New product
const productCreate = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        details: req.body.details
      });
    
      try {
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update product
const productUpdate = async (req, res) => {
    try {
        const product = {
          title: req.body.title,
          price: req.body.price,
          details: req.body.details
        };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
const productDelete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    productAll, 
    productDetails, 
    productCreate, 
    productUpdate, 
    productDelete
  }