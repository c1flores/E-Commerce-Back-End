// Dependencies 
const express = require('express');
const routes = require('./routes');

// Start server and use port 3001
const app = express()
const PORT = process.env.PORT || 3001;


// Middleware to complete response - request cycle
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(routes)

// Sync sequelize models to the database and turn on server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

