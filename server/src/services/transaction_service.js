const Transaction = require("../models/transaction");

exports.create_transaction = (data) =>
  new Transaction(data).save().then((transaction) => transaction.toObject());

exports.get_user_transactions = () => Transaction.find();

exports.delete_transaction = (id) => Transaction.findByIdAndDelete(id);
