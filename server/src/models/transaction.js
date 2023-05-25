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
  receiver_account: {
    type: String,
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
