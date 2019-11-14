const request = require('superagent')
const router = require('express').Router()

const URL = 'http://localhost:3000/api/v1/dog'


router.get('/dog', (req, res) => {
  return request.get(URL)
    .then(response =>
      res.json(response.body))
})

module.exports = router
