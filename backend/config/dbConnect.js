const mongoose = require('mongoose');

const dbConnect = () => {

    mongoose.connect(process.env.MONGODB_CONNECTION_URL, 
        { useFindAndModify: true, useUnifiedTopology: true, useCreateIndex: true,useNewUrlParser: true})
        .then(() => console.log("Successfully connected to database"))
        .catch((error) => console.log(error));

}

module.exports = dbConnect;

