const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use('/api/products', productRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/productdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Product Service: Connected to MongoDB'))
.catch(err => console.error('Product Service: MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
