const express = require('express');
const path = require('path');
const app = express();
const productsRouter = require('./routes/products');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static('public')); // Serve static files if needed

// Use the products route
app.use('/products', productsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
