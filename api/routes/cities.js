const express = require('express');
const router = express.Router();

const cities = require('./cities.json')
/* GET users listing. */
router.get('/cities', function(req, res, next) {
  res.send(cities);
});


module.exports = router;
