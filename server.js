const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hell00000000000000000000000000000000000000000000000o from my JavaScript server!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello', time: new Date() });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
