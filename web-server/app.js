const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('custom-env').env(process.env.NODE_ENV || 'local', './config');

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(cors(), express.json(), express.urlencoded({ extended: true }));
app.use('/articles', require('./routes/article'));

const PORT = process.env.PORT || 30000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

