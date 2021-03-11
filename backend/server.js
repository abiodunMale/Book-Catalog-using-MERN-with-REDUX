const express = require('express');
const error = require('./middleware/errorHandler');
const bookRoutes = require('./routes/BookRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
//Database connection
require('./config/dbConnect')();




const app = express();
app.use(express.json());


//Routes
app.use('/api/user', userRoutes);
app.use('/api/book', bookRoutes)

//Error middleware
// app.use(error.errorHandler);


//Server
const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});