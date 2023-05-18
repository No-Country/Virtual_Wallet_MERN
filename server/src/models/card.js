const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      enum: ["debit", "credit"],
    },
    number: {
      type: Number,
    },
    expiration_date: {
      type: String,
    },
    cvv: {
      type: Number,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    balance: {
      type: Number,
      default: 100000,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Card", cardSchema);
