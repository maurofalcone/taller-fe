const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

const transactions = [];

app.get("/transactions", (req, res) => {
  res.status(200).json({
    data: transactions,
    error: "",
  });
});

app.post("/transactions", (req, res) => {
  console.log(req.body);
  const transaction = {
    amount: req.body.amount,
    description: req.body.description,
  };
  transactions.push(transaction);
  res.status(200).json({
    data: transactions,
    error: "",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
