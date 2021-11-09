const express = require('express');
const { dbConnect } = require('./db/config');
const cors = require('cors');
require('dotenv').config();

// Create server
const app = express();

// DB
dbConnect();

// CORS
app.use(cors());

// Public Dir
app.use( express.static('public') );

// Body Parse and Reading
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/ingredients', require('./routes/ingredients'));
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/search', require('./routes/search'));
// TODO CRUD: Events

// Listen petitions
app.listen( process.env.PORT, () => {
    console.log(`Server running in ${ process.env.PORT }`)
})