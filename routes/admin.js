const express = require('express');
const routes = express.Router();

routes.get('/add-product',(req, res, next) => {
  res.send('<form method="POST" action="/product"><input type="text" name="title"></input><button type="submit">click</button></button></form>')
});

routes.post('/product',(req, res, next) => {
  console.log(req.body);
  res.send('<h1>Thank you</h1>')
});

module.exports = routes;