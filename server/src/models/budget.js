const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  limit: {
    type: Number,
  },
  category: {
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

module.exports = mongoose.model("Budget", budgetSchema);
