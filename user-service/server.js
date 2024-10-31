const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('User Service: Connected to MongoDB'))
.catch(err => console.error('User Service: MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
