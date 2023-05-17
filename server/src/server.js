const express = require("express");
const body_parser = require("body-parser");
const color = require("colors");
const morgan = require("morgan");
const database = require("../src/database/database");
const cors = require("cors");
require("dotenv").config();
const auth_routes = require("./routes/auth");
const user_routes = require("./routes/user");
const card_routes = require("./routes/card");
const transaction_routes = require("./routes/transaction");

const cors_options = {
  origin: "*",
  optionsSuccessStatus: 200,
};
const app = express();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(cors(cors_options));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  try {
    res.send("PENGUIN-WALLET SERVER RUNNING.");
  } catch (err) {
    return res.sendStatus(500);
  }
});
app.use("/api/", auth_routes);
app.use("/api/user", user_routes);
app.use("/api/card", card_routes);
app.use("/api/transaction", transaction_routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(color.cyan.underline.bold(`Server running on port: ${PORT}`));
});

database();

module.exports = app;
