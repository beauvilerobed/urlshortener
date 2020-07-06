const express = require('express');
const connectDB = require('./config/db');
const Url = require('./model/Url')
const cors = require('cors');

const app = express();

connectDB();

app.use(cors());

// add a piece of middleware to accept json data into api
app.use(express.json({ extended: false}));

//define routes:

//redirect tiny_url
app.use('/', require('./routes/index'));
//POST new tiny_url
app.use('/api/url', require('./routes/url'));
// list all tiny_urls
app.use('/api', require('./routes/shorturls'));


const PORT = 5000;
 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
