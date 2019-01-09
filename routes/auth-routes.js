const router = require('express').Router();
const User = require('../models/user')

router.get('/api', (req, res, next) => {
  User.aggregate().near({
    near: {
     'type': 'Point',
     'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    maxDistance: 1000000,
    spherical: true,
    distanceField: "dis"
   })﻿
  .then(results => {
    res.send(results)
  })
  .catch(err => {
    throw err
  })
})

router.post('/data', (req, res, next) => {
  User.create(req.body)
    .then((result) => {
      console.log(result)
      res.send({ result })
    })
    .catch(err => {
      throw err
    })

})

module.exports = router