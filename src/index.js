const express = require('express');
const app = express();

app.use(express.json());

// import routes
const userRoutes = require('./routes/users');
const recipeRoutes = require('./routes/recipes');

// initalize routes
app.use('/api/recipes/', recipeRoutes);
app.use('/api/users/', userRoutes);

const startApplication = () => {
  try {
    app.listen(5000, () => {
      console.log(`The application is running at http://localhost:5000/`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

startApplication();
