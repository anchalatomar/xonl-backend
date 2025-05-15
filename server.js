const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = ['https://www.multiply.onl/', 'http://localhost:3000'];
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});
app.get('/version', (req, res) => {
  const mongooseVersion = require('mongoose').version;
  res.json({ mongooseVersion });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});