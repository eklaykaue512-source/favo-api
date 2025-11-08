const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new pg.Pool({
  connectionString: 'postgresql://postgres:12345678@localhost:5432/favo'
});

app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(4000, () => console.log('Servidor rodando em http://localhost:4000'));
