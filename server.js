const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let invoices = [];

app.get("/invoices", (req, res) => {
  res.json(invoices);
});

app.post("/invoices", (req, res) => {
  invoices.push(req.body);
  res.json({ message: "Invoice added" });
});

app.put("/invoices/:id", (req, res) => {
  const id = req.params.id;
  invoices[id] = req.body;
  res.json({ message: "Invoice updated" });
});

app.delete("/invoices/:id", (req, res) => {
  const id = req.params.id;
  invoices.splice(id, 1);
  res.json({ message: "Invoice deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});