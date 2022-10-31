// Dependencies
const router = require('express').Router();
const categoryRoutes = require('./categoryRouter');
const productRoutes = require('./productRouter');
const tagRoutes = require('./tagRouter');

// Create modular route handlers
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;