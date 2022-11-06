// Dependencies 
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection.js');

// Start server and use port 3001
const app = express()
const PORT = process.env.PORT || 3001;


// Middleware to complete response - request cycle
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(routes)

// Sync sequelize models to the database and turn on server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});