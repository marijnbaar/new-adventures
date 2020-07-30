const express = require('express');
const cities = require('./db/cities.json');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors())

app.get('/api/cities/', (req, res) => {
  res.send(cities)
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

