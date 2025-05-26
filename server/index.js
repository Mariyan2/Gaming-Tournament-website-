const express = require('express');
const app = express();
const port = 3001;


app.use(express.json());

const cors = require('cors');
app.use(cors());

const { getDocs, collection } = require('firebase/firestore');
const { db } = require("./firebase");


app.get('/api/hello', (req, res) => {
  res.json({ message: 'ExpressJS is functioning' });
});


app.get('/api/tournaments', async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, 'tournaments'));
    const tournaments = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.json(tournaments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tournaments' });
  }
});

app.listen(port, () => {
  console.log(`Server port: http://localhost:${port}`);
});
