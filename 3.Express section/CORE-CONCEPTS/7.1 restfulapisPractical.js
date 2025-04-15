const express = require('express');
const app = express();

app.use(express.json()); // to parse JSON bodies

const products = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' }
];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

// POST (create) a new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT (update) entire product
app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');

  product.name = req.body.name;
  res.json(product);
});

// DELETE a product
app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Product not found');

  products.splice(index, 1);
  res.send('Deleted successfully');
});

app.listen(3000, () => console.log('Server running on port 3000'));
