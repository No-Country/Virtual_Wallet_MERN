const Transaction = require("../models/transaction");
const User = require("../models/user");


exports.create_transaction = (data) =>
  new Transaction(data).save().then((transaction) => transaction.toObject());

exports.get_user_transactions = () => Transaction.find();

exports.delete_transaction = (id) => Transaction.findByIdAndDelete(id);

exports.get_user_account_number = (receiver_account) => User.findOne({account_number: receiver_account})