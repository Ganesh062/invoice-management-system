const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// SQLite database
const db = new sqlite3.Database("invoice.db");

db.run(`
  CREATE TABLE IF NOT EXISTS invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invoiceNo TEXT UNIQUE,
    client TEXT,
    date TEXT,
    amount INTEGER,
    status TEXT
  )
`);

// CREATE invoice
app.post("/invoices", (req, res) => {
  const { invoiceNo, client, date, amount, status } = req.body;

  db.run(
    "INSERT INTO invoices (invoiceNo, client, date, amount, status) VALUES (?,?,?,?,?)",
    [invoiceNo, client, date, amount, status],
    function (err) {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ id: this.lastID });
    }
  );
});

// READ invoices
app.get("/invoices", (req, res) => {
  db.all("SELECT * FROM invoices", (err, rows) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(rows);
  });
});

// DELETE invoice
app.delete("/invoices/:id", (req, res) => {
  db.run(
    "DELETE FROM invoices WHERE id = ?",
    req.params.id,
    function (err) {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ deleted: this.changes });
    }
  );
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});