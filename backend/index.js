// server/index.js
import express from 'express';
import cors from 'cors';
import pg from 'pg';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

// PostgreSQL config
const db = new pg.Client({
  connectionString: "postgresql://postgres:Siddu%402808@mainline.proxy.rlwy.net:45524/railway",
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
  console.log(`Server is running on port ${port}`);
});
