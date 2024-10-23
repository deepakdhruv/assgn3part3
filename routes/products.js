const express = require('express');
const router = express.Router();

// Sample products data
const products = [
    { name: 'Product 1', price: 10.00 },
    { name: 'Product 2', price: 15.00 },
    { name: 'Product 3', price: 20.00 },
    { name: 'Product 4', price: 25.00 },
];

// Route to render the products page
router.get('/', (req, res) => {
    const searchQuery = req.query.search ? req.query.search.toLowerCase() : '';
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery)
    );
    res.render('products', { products: filteredProducts });
});

module.exports = router;
