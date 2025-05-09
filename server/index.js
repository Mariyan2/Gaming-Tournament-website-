const express = require('express');
const app = express();
const port = 3001;


app.use(express.json());
app.get('/api/hello', (req, res) => {
  res.json({ message: 'ExpressJS is functioning' });
});


app.listen(port, () => {
  console.log(`Server port: http://localhost:${port}`);
});
