const express = require('express');
const cors = require('cors');
const products = require('./data/products');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint para retornar todos os produtos
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
