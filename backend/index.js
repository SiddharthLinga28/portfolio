// backend/index.js
import express from 'express';
import cors from 'cors';
import pg from 'pg';


import multer from 'multer';
import path from 'path';


const upload = multer({ dest: 'uploads/' });

const app = express();
const port = 3001;

app.use(cors());

const db = new pg.Client({
  connectionString: "postgresql://postgres:faBGXVEFUsUmWwOuPcHUweJFvyUynydM@hopper.proxy.rlwy.net:51842/railway",
  ssl: { rejectUnauthorized: false }
});

db.connect();

app.get('/education', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM education ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database query failed");
  }
});
app.get('/research', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM research ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Research DB query failed");
  }
});
app.get('/work_experience', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM work_experience ORDER BY from_date DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Work experience DB query failed");
  }
});
app.get('/projects', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM projects ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Projects DB query failed");
  }
});


app.post('/submit-question', upload.single('file'), async (req, res) => {
  const { question, email } = req.body;
  const file = req.file ? req.file.originalname : null;

  try {
    await db.query(
      'INSERT INTO questions (question, file, email) VALUES ($1, $2, $3)',
      [question, file, email]
    );
    res.status(200).send('Success');
  } catch (err) {
    console.error('DB insert failed:', err);
    res.status(500).send('Database insert failed');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
