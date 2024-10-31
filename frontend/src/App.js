import React from 'react';
import axios from 'axios';

function App() {
  const fetchUsers = async () => {
    const response = await axios.get('/api/users');
    console.log(response.data);
  };

  const fetchProducts = async () => {
    const response = await axios.get('/api/products');
    console.log(response.data);
  };

  return (
    <div>
      <h1>MERN Microservices App</h1>
      <button onClick={fetchUsers}>Fetch Users</button>
      <button onClick={fetchProducts}>Fetch Products</button>
    </div>
  );
}

export default App;
