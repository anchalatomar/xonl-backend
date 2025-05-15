const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

const cors = require('cors');

const allowedOrigins = ["https://multiply.onl", "http://localhost:3000"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
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