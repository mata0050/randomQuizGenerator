const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/auth', require('./routes/auth/auth'));
app.use('/register', require('./routes/auth/register'));
app.use('/api/questions', require('./routes/api/questions'));
app.use('/api/quiz', require('./routes/api/quiz'));
app.use('/api/youtube', require('./routes/api/youtube'));

// Error Middleware
app.use(errorHandler);

// Serve static assets in production
if (process.env.NPM_CONFIG_PRODUCTION) {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`👉Server is listening at http://localhost:${PORT}`);
});
