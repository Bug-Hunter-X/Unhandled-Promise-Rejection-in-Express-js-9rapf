const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Success!');
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error('Caught error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Add more robust error handling here, like logging to a file or sending an alert
});
app.listen(3000, () => console.log('Server listening on port 3000'));