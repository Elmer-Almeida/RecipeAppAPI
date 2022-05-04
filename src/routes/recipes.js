const { Router } = require('express');
const router = Router();

const recipes = require('../data/recipes');

router.get('/all', (req, res, next) => {
  res.json(recipes);
});

module.exports = router;
