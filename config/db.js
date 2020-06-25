const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// function to connect to database
// mongoose methodes return a promise
const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            // remove deprecated message
            useUnifiedTopology: true
        })

        console.log('MongoDB Connected')
    } catch(err) {
        console.error(err.message);
        // exit with failure
        process.exit(1);
    }
};

module.exports = connectDB;