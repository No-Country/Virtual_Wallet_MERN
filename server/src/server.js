const express = require("express");
const body_parser = require("body-parser");
const color = require("colors");
const morgan = require("morgan");
const database = require("../src/database/database");
const cors = require("cors");
require("dotenv").config();

const cors_options = {
  origin: "*",
  optionsSuccessStatus: 200,
};
const app = express();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(cors(cors_options));
app.use(morgan("dev"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(color.cyan.underline.bold(`Server running on port: ${PORT}`));
});

database();

module.exports = app;
