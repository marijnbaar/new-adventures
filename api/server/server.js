const express = require('express');
const cities = require('./db/cities.json').cities;
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors())

app.get('/api/cities/', (req, res) => {
  res.send(cities)
});

app.get('/api/cities/:city', (req, res) => {
  const oneCity = cities.filter(city => city.city.toLowerCase() === req.params.city)
  res.send(oneCity[0])
});                                       

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

