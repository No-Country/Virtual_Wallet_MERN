const mongoose = require("mongoose");
const color = require("colors");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";
const MONGODB_URI = isProduction
  ? process.env.MONGO_URI_PROD
  : process.env.MONGODB_URI_DEV;

const database = async () => {
  try {
    const conn = await mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        if (isProduction)
          console.log(
            color.underline.red(`Connected to Mongo: ${process.env.NODE_ENV}`)
          );
      })
      .catch((err) => console.log("Error to connect Mongo: ", err.message));
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = database;
