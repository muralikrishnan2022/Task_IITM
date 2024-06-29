const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Create Product
router.post('/', async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        next(err);
    }
});

// Read Products
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        next(err);
    }
});

// Update Product
router.put('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(product);
    } catch (err) {
        next(err);
    }
});

// Delete Product
router.delete('/:id', async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
