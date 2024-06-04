const express = require('express')
const route = express.Router()
const task = require('./task')

route.use('/', task)


module.exports = route; 