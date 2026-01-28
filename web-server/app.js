const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('custom-env').env('local', './config')
const app = express()

mongoose.connect(process.env.CONNECTION_STRING)
app.use(cors())
app.use(express.json())
app.use('/articles', require('./routes/article'))

app.listen(process.env.PORT || 30000)
