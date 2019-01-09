const router = require('express').Router();

router.get('/login', (req, res, next) => {
  res.send('login page')
})

module.exports = router