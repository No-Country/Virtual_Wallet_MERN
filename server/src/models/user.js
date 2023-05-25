const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    account_number: {
      type: String,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);
