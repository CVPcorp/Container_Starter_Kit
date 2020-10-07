const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const postsRoute = require('./routes/posts');
const repo = require('./repositories/posts');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// health check
app.get('/api', async (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'College Hire Bootcamp Posts API is up & running!'
  });
});

// routes
app.use('/api/posts', postsRoute);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

repo.init();

app.listen(config.PORT, err => {
  console.log(`Listening on port ${config.PORT}...`);
});