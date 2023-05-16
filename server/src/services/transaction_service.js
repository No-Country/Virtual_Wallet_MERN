const Transaction = require("../models/transaction");

exports.create_transaction = (data) =>
  new Transaction(data).save().then((transaction) => transaction.toObject());
