const mongoose = require('mongoose');

const dbConnect = async() => {
    try{

        await mongoose.connect(process.env.DB_CNN);

        console.log('DB Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error on initialization of the DB');
    }
}

module.exports = {
    dbConnect
}