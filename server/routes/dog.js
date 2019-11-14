const request = require('superagent')
const router = require('express').Router()

const URL = 'https://random.dog/woof.json'

router.get('/dog', (req, res) => {
  return request.get(URL)
    .then(response =>
      res.json(response.body))
})

module.exports = router
