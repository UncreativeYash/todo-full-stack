const mongoose = require('mongoose');

const { MONGO_URL } = process.env;
const dbConnect = async ()=>{
    
    try {
        // connect to the MongoDB database
        mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        // log a success message
        console.log('Successfully connected to the database!');
    } catch (error) {
        // log an error message
        console.error('Error connecting to the database:', error);
        process.exit(1)
    }
}

module.exports = dbConnect