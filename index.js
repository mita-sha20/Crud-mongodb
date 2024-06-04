require('dotenv').config()
const express = require('express')
const router = require('./routes')
const app = express()
const mongoConfig = require('./config/mongoConfig')
const cors = require("cors")


mongoConfig();
app.use(cors())
app.use(express.json())
app.use('/', router)

const port = process.env.PORT || 8002

app.listen(port, ()=>{
    console.log('port running')
})