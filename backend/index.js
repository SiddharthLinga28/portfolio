// backend/index.js
import express from 'express';
import cors from 'cors';
import pg from 'pg';

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
