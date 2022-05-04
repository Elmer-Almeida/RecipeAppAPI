const { Router } = require('express');
const router = Router();

const users = require('../data/users');

router.get('/all', (req, res, next) => {
  res.json(users);
});

module.exports = router;
