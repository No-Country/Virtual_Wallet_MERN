const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  card: {
    type: String,
    enum: ["visa", "mastercard", "amex"],
  },
  concept: {
    type: String,
    enum: ["transferencia", "servicio", "impuesto"],
  },
  amount: {
    type: Number,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
