const path = require('path')
const express = require('express')

const server = express()
const router = require('./routes/dog')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('api/v1', router)

module.exports = server
